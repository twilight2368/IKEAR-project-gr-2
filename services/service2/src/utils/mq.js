// mq.js
const amqp = require("amqplib");
const clc = require("cli-color");

let channel = null;

async function connectToRabbitMQ() {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    channel = await connection.createChannel();
    console.log("====================================");
    console.log(clc.green("Connected to RabbitMQ"));
    console.log("====================================");
  } catch (error) {
    console.log("====================================");
    console.error(clc.red("Error connecting to RabbitMQ"));
    console.error(error);
    console.log("====================================");
    if (error.code === 405) {
      console.error("Queue is locked. Retrying...");
      setTimeout(connectToRabbitMQ, 5000); // Retry after 5 seconds
    }
  }
}

async function publishToQueue(queue, message) {
  if (!channel) await connectToRabbitMQ();
  try {
    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(message));
    console.log(clc.green(`Message sent to queue '${queue}': ${message}`));
  } catch (error) {
    console.error(`Error publishing to queue '${queue}':`, error);
  }
}

async function consumeFromQueue(queue, callback) {
  if (!channel) await connectToRabbitMQ();
  try {
    await channel.assertQueue(queue, { durable: true });
    channel.consume(queue, (msg) => {
      if (msg !== null) {
        callback(msg.content.toString());
      }
    });
    console.log(clc.blue(`Waiting for messages in queue '${queue}'...`));
  } catch (error) {
    console.error(`Error consuming from queue '${queue}':`, error);
  }
}

async function publishToExchange(exchange, message) {
  if (!channel) await connectToRabbitMQ();
  try {
    await channel.assertExchange(exchange, "fanout", { durable: false });
    channel.publish(exchange, "", Buffer.from(message));
    console.log(
      clc.green(`Message published to exchange '${exchange}': ${message}`)
    );
  } catch (error) {
    console.error(`Error publishing to exchange '${exchange}':`, error);
  }
}

async function consumeFromExchange(exchange, callback) {
  if (!channel) await connectToRabbitMQ();
  try {
    // Declare the exchange with 'fanout' type (broadcasts messages to all bound queues)
    await channel.assertExchange(exchange, "fanout", { durable: false });

    // Create a unique, temporary queue for each consumer
    const { queue } = await channel.assertQueue("", { exclusive: true });

    // Bind the queue to the exchange
    await channel.bindQueue(queue, exchange, "");

    console.log(clc.blue(`Waiting for messages in queue '${queue}'...`));

    channel.consume(queue, (msg) => {
      if (msg !== null) {
        callback(msg.content.toString());
      }
    });
  } catch (error) {
    console.error(`Error consuming from exchange '${exchange}':`, error);

    // Retry logic for RESOURCE_LOCKED error (Queue/Resource lock issue)
    if (error.code === 405) {
      console.error("Resource is locked, retrying...");
      setTimeout(() => consumeFromExchange(exchange, callback), 5000); // Retry after 5 seconds
    }
  }
}

module.exports = {
  connectToRabbitMQ,
  publishToQueue,
  consumeFromQueue,
  publishToExchange,
  consumeFromExchange,
};

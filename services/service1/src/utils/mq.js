// mq.js
const amqp = require("amqplib");
const clc = require("cli-color");

let channel = null;

async function connectToRabbitMQ() {
  try {
    const connection = await amqp.connect("amqp://localhost::5672");
    channel = await connection.createChannel();
  } catch (error) {
    console.log("====================================");
    console.error(clc.red("Error connecting to RabbitMQ"));
    console.error(error);
    console.log("====================================");
  }
}

async function publishToQueue(queue, message) {
  if (!channel) await connectToRabbitMQ();
  await channel.assertQueue(queue);
  channel.sendToQueue(queue, Buffer.from(message));
}

async function consumeFromQueue(queue, callback) {
  if (!channel) await connectToRabbitMQ();
  await channel.assertQueue(queue);
  channel.consume(queue, (msg) => {
    if (msg !== null) {
      callback(msg.content.toString());
      channel.ack(msg);
    }
  });
}

async function publishToExchange(exchange, message) {
  if (!channel) await connectToRabbitMQ();
  await channel.assertExchange(exchange, "fanout", { durable: false });
  channel.publish(exchange, "", Buffer.from(message));
  console.log(
    clc.green(`Message published to exchange '${exchange}': ${message}`)
  );
}

async function consumeFromExchange(exchange, callback) {
  if (!channel) await connectToRabbitMQ();
  await channel.assertExchange(exchange, "fanout", { durable: false });

  // Create a unique, temporary queue for each consumer
  const { queue } = await channel.assertQueue("", { exclusive: true });
  await channel.bindQueue(queue, exchange, "");

  console.log(clc.blue(`Waiting for messages in queue '${queue}'...`));

  channel.consume(queue, (msg) => {
    if (msg !== null) {
      callback(msg.content.toString());
      channel.ack(msg);
    }
  });
}

module.exports = {
  connectToRabbitMQ,
  publishToQueue,
  consumeFromQueue,
  publishToExchange,
  consumeFromExchange,
};

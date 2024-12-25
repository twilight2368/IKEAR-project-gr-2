// mq.js
const amqp = require("amqplib");

let channel = null;

async function connectToRabbitMQ() {
  const connection = await amqp.connect("amqp://localhost::5672");
  channel = await connection.createChannel();
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

module.exports = { connectToRabbitMQ, publishToQueue, consumeFromQueue };

import amqp from 'amqplib/callback_api';
import { environment } from '../environments';
import { seed } from '../db/seeder';

export const connectToQueue = async (queue) => {
    await amqp.connect(environment.AMQP_URL, async (err, conn) => {
        await conn.createChannel(async (err, channel) => {
            await channel.assertQueue(queue, {
                durable: true
            });
            await channel.consume(queue, async (msg) => {
                if (!msg) console.log('No message to consume');
                else seed(JSON.parse(msg.content.toString()));
            });
        });
    });
}
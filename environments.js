import { config } from 'dotenv';

config();

export const environment = {
    AMQP_URL: process.env.AMQP_URL,
    QUEUE: process.env.QUEUE,
    MONGO: process.env.MONGO
}
import express from 'express';
import { environment } from './environments';
import mongoose from 'mongoose';
import { connectToQueue } from './amqp';

const app = express();

mongoose.connect(environment.MONGO, (err) => {
    if (err) console.error(err);
    app.listen(4000, () => {
        console.log('Consumer listening');
        connectToQueue(environment.QUEUE);
    });
});
import { Schema, model } from 'mongoose';

const ProfileSchema = new Schema({
    name: String,
    age: Number,
    profession: String,
    role: String,
    user_id: {
        type: String,
        unique: true
    }
});

export const Profile = model("Profile", ProfileSchema);
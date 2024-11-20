import { TUser } from "@/lib/types";
import mongoose, { Schema, model } from "mongoose";
import {
    MIN_USERNAME_CHARACTERS, MAX_PASSWORD_CHARACTERS,
    MIN_PASSWORD_CHARACTERS, MAX_USERNAME_CHARACTERS
} from '@/constants'

const UserSchema = new Schema<TUser>({
    username: {
        type: String,
        required: [true, "Name is required"],
        minlength: [MIN_USERNAME_CHARACTERS, `Username must be at least ${MIN_USERNAME_CHARACTERS} characters long`],
        maxlength: [MAX_USERNAME_CHARACTERS, `Username cannot exceed ${MAX_USERNAME_CHARACTERS} characters`],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Email is invalid",
        ],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [MIN_PASSWORD_CHARACTERS, `Password must be at least ${MIN_PASSWORD_CHARACTERS} characters long`],
        maxlength: [MAX_PASSWORD_CHARACTERS, `Password cannot exceed ${MAX_PASSWORD_CHARACTERS} characters`],
    },
},
    {
        timestamps: true,
    });

const User = mongoose.models?.User || model<TUser>('User', UserSchema);
export default User;
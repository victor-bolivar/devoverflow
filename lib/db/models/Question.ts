import mongoose, { Schema, model } from "mongoose";
import { TQuestion } from '@/lib/types'

const QuestionSchema = new Schema<TQuestion>({
    title: {
        type: String,
        required: [true, "A title is required"],
    },
    content: {
        type: String,
        required: [true, 'A content is required']
    },
    tags: {
        type: [String],
        required: [true, "At leas one tage is required"]
    },
    upvotes: {
        type: Number,
        required: true,
        default: 0
    },
    downvotes: {
        type: Number,
        required: true,
        default: 0
    },
    answers: {
        type: [String],
        default: []
    },
    views: {
        type: Number,
        required: true,
        default: 0
    }
},
    {
        timestamps: true,
    }
);

const Question = mongoose.models?.Question || model<TQuestion>('Question', QuestionSchema);
export default Question;
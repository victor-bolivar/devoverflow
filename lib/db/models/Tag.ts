import mongoose, { Schema, model } from "mongoose";
import { TTag } from '@/lib/types'

const TagSchema = new Schema<TTag>({
    name: {
        type: String,
        required: [true, "A tag name is required"],
    }
}
);

const Tag = mongoose.models?.Tag || model<TTag>('Tag', TagSchema);
export default Tag;
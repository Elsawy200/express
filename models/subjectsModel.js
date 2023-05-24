import { Schema, model } from "mongoose";

const SubjectsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    section:{
        type:Schema.Types.ObjectId,
        required: true,
        ref:"sections"
    },
    required_sub:{
        type: String,
        required: true
    },
    pdf:{
        type: String,
        required: true
    }

},{versionKey:false,timestamps:true});

export default model('subjects',SubjectsSchema);

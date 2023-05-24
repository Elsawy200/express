import { Schema, model } from "mongoose";

const SectionsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
},{versionKey:false,timestamps:true});


export default model('sections',SectionsSchema);

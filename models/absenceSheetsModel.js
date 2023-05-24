import { Schema,model } from "mongoose";

const AbsenceSheets=new Schema({
   name:{
       type:String,
       required:true
   },
    student:{
       type:Schema.Types.ObjectId,
        required:true,
        ref:"student"
    }
},{timestamps:true,versionKey:false});

export default model("absencesheets",AbsenceSheets);

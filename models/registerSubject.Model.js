import {Schema,model} from "mongoose";

const RegisterSubjectSchema=new Schema({
      student_id:{
          type:Schema.Types.ObjectId,
          required:true,
          ref:"student"
      },
      subject_id:{
          type:Schema.Types.ObjectId,
          required:true,
          ref:"subjects"
      }
},{timestamps:true,versionKey:false});

export default model('registersubject',RegisterSubjectSchema);

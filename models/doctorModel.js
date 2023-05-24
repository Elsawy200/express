import { Schema, model } from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt'
const saltRounds = 10;
const DoctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: "Invalid Email Address"
        }
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    role:{
        type:String,
        required:true,
    }
}, { timestamps: true, versionKey: false });


DoctorSchema.pre('save', async function (next) {
    const admin = this;
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const hashedPassword = await bcrypt.hash(this.password, saltRounds);
        this.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});

DoctorSchema.pre('findOneAndUpdate', async function(next) {
    const update = this.getUpdate();

    if (!update.password) {
      return next();
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(update.password, salt);
      update.password = hash;
      next();
    } catch (error) {
      next(error);
    }
  });

export default model('doctor', DoctorSchema);
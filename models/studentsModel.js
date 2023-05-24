import {Schema, model} from "mongoose";
import bcrypt from "bcrypt";
const saltRounds=10;
const StudentSchema = new Schema([
    {
        username: {
            type: String,
            required: true
        },
        academic_number: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            select: false,
        }
    }
], {timestamps: true, versionKey: false});

StudentSchema.pre('save', async function (next) {
    const student = this;
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

StudentSchema.pre('findOneAndUpdate', async function(next) {
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

export default model('student',StudentSchema);
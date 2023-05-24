import express from 'express';
import mongoose from "mongoose";
import section from './routes/Admin/sections.js';
import subject from './routes/Admin/subjects.js';
import doctor from './routes/Admin/doctor.js';
import student from './routes/Admin/student.js';
import doc from './routes/Doctor/doctor.js';
import register from './routes/Admin/register.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
// define express
const app = express();
// for json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// for Configration With DB
dotenv.config({
    path: './config/config.env'
});
mongoose.connect(process.env.db);
// For Routes
// For Admin
app.use('/admin/sections', section);
app.use('/admin/subjects', subject);
app.use('/admin/doctor',doctor);
app.use('/admin/student',student);
app.use('/admin/register',register);
//Fot Doctor
app.use('/doctor',doc);

app.listen(process.env.port, () => {
    console.log("my port is " + process.env.port);
})


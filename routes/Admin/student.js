import {create_student,get_by_id, get_student, update_student,delete_student} from "../../controllers/AdminController/studentController.js";
import express from "express";
const app=express;
const router=app.Router();

// Create Student
router.post('/create',create_student);
// Edit Student
router.put('/update',update_student);
// Get Student
router.get('/get',get_student);
// Get By Id
router.get('/get/:id',get_by_id);
// Delete Student
router.delete('/delete',delete_student);


export default router;
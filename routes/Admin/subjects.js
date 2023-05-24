import express from 'express';
import subjectsModel from '../../models/subjectsModel.js';
import { create, update, get, del, get_by_id } from '../../controllers/AdminController/subjectController.js';

const router = express.Router();


// Add Subject
router.post("/create", create);
// Edit Subject
router.put("/update", update);
// Get Subject
router.get("/get", get);
// Delete Subject
router.delete("/delete", del);
// Get  Subject By Id
router.get("/:id", get_by_id);






export default router;
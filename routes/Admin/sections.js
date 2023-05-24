import express from 'express';
import sectionsModel from '../../models/sectionsModel.js';
import {create,update,get,del,get_by_id} from '../../controllers/AdminController/sectionController.js';

const router = express.Router();


// Add Section
router.post("/create",create);
// Edit Section
router.put("/update",update);
// Get Sections
router.get("/get",get);
// Delete Sections
router.delete("/delete",del);
// Get Sections By Id
router.get("/:id",get_by_id);

export default router;
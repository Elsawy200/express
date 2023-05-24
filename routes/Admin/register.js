import express from "express";
import {register} from "../../controllers/AdminController/registerSubjectController.js";
const app=express;
const  router=app.Router();



// register
router.post('/subject',register);


export default router;


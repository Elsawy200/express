import express from 'express';
import { create, update,get,get_by_id, del} from '../../controllers/AdminController/doctorController.js';

const router = express.Router();


// Create Doctor
router.post('/create', create);
// Update Doctor
router.put('/update', update);
// Get Doctor
router.get('/get', get);
// Get Doctor By Id
router.get('/:id', get_by_id);
// Delete Doctor
router.delete('/delete', del);
export default router;


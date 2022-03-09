import express from "express"
import{getUser,CreateUser,getUserByID,updateUser,deleteUser} from '../controllers/user.controllers.js'
const router=express.Router();
router.get('/', getUser);
router.post('/',CreateUser);
router.get('/:id',getUserByID);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);
export default router;
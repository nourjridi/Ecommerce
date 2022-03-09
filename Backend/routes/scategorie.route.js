import express from "express"
import {getScategorie,CreateScategorie,getScategorieByID,updateScategorie,deleteScategorie} from '../controllers/scategories.controllers.js'
const router=express.Router();
router.get('/', getScategorie);
router.post('/',CreateScategorie);
router.get('/:id',getScategorieByID);
router.put('/:id',updateScategorie);
router.delete('/:id',deleteScategorie);
export default router;
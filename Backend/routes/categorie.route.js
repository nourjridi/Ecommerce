import express from "express"
import {getCategories,CreateCategorie,getCategorieByID,updateCategorie,deleteCategorie} from '../controllers/categories.controllers.js'
const router=express.Router();
router.get('/', getCategories);
router.post('/',CreateCategorie);
router.get('/:id',getCategorieByID);
router.put('/:id',updateCategorie);
router.delete('/:id',deleteCategorie);
export default router;
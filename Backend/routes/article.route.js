import express from "express"
import {getArticle,CreateArticle,getArticleByID,updateArticle,deleteArticle} from '../controllers/articles.controllers.js'
const router=express.Router();
router.get('/', getArticle);
router.post('/',CreateArticle);
router.get('/:id',getArticleByID);
router.put('/:id',updateArticle);
router.delete('/:id',deleteArticle);
export default router;
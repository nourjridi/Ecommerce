import mongoose from 'mongoose';
import Article from '../models/article.js'

//la methode get 
export const getArticle = async(req,res)=>{
    try{
        const art = await Article.find().populate("categorieID").populate("scategorieID").exec();//jointure et affiche tous les attributs 
        res.status(200).json(art)
    }catch(error){
        res.status(404).json({message:error.message});
    }
}
//la méthode post
export const CreateArticle=async(req,res)=>{
    const newArticle = new Article (req.body)
    try{ 
        await newArticle.save();
        res.status(201).json(newArticle);
    }catch (error){
        res.status(409).json({message:error.messaage});
    }
}
//la méthode getbyid
export const getArticleByID = async(req,res)=>{
        try{
            const art= await Article.findById(req.params.id);
            res.status(200).json(art) //cnx au serveur mrigla 
        }catch (error){
            res.status(409).json({message:error.messaage});
        }
}
//la méthode put
export const updateArticle = async(req,res)=>{
    const {id}=req.params; //eli jeyni ml url
    const art =await Article.findByIdAndUpdate(id, req.body); 
    res.json(art);}

    //la methode delete 
    export const deleteArticle = async(req,res)=>{
        const {id}=req.params; //eli jeyni ml url
        if(!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send(`pas d articel avec un id: ${id}`); 
        await Article.findByIdAndDelete(id); 
        res.json({ message:"article deleted successfully."});
}

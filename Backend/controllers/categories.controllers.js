import mongoose from 'mongoose';
import Categorie from '../models/categorie.js'
//la methode get 
export const getCategories = async(req,res)=>{
    try{
        const cat = await Categorie.find();
        res.status(200).json(cat)
    }catch(error){
        res.status(404).json({message:error.message});
    }
}
//la méthode post
export const CreateCategorie=async(req,res)=>{
    const newCategorie = new Categorie (req.body)
    try{ 
        await newCategorie.save();
        res.status(201).json(newCategorie);
    }catch (error){
        res.status(409).json({message:error.messaage});
    }
}
//la méthode getbyid
export const getCategorieByID = async(req,res)=>{
        try{
            const cat= await Categorie.findById(req.params.id);
            res.status(200).json(cat) //cnx au serveur mrigla 
        }catch (error){
            res.status(409).json({message:error.messaage});
        }
}
//la méthode put
export const updateCategorie = async(req,res)=>{
    const {id}=req.params; //eli jeyni ml url
    const {nomcategorie,imagecategorie}=req.body; //eli jeyni ml formulaire
    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`pas de categorie avec un id: ${id}`);
    const cat1 = {nomcategorie:nomcategorie,imagecategorie:imagecategorie, _id: id }; 
    await Categorie.findByIdAndUpdate(id, cat1); 
    res.json(cat1);}

    //la methode delete 
    export const deleteCategorie = async(req,res)=>{
        const {id}=req.params; //eli jeyni ml url
        if(!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send(`pas de categorie avec un id: ${id}`); 
        await Categorie.findByIdAndDelete(id); 
        res.json({ message:"categorie deleted successfully."});
}

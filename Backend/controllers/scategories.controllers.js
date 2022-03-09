import mongoose from 'mongoose';
import Scategorie from '../models/scategorie.js'
//la methode get 
export const getScategorie = async(req,res)=>{
    try{
        const scat = await Scategorie.find().populate("categorieID").exec();
        res.status(200).json(scat)
    }catch(error){
        res.status(404).json({message:error.message});
    }
}
//la méthode post
export const CreateScategorie=async(req,res)=>{
    const newSCategorie = new Scategorie (req.body)
    try{ 
        await newSCategorie.save();
        res.status(201).json(newSCategorie);
    }catch (error){
        res.status(409).json({message:error.messaage});
    }
}
//la méthode getbyid
export const getScategorieByID = async(req,res)=>{
        try{
            const scat= await Scategorie.findById(req.params);
            res.status(200).json(scat) //cnx au serveur mrigla 
        }catch (error){
            res.status(409).json({message:error.messaage});
        }
}
//la méthode put
export const updateScategorie = async(req,res)=>{
    const {id}=req.params; //eli jeyni ml url
    const {nomcategorie,imagecategorie}=req.body; //eli jeyni ml formulaire
    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`pas de categorie avec un id: ${id}`);
    const scat1 = { nomscategorie:nomscategorie,imagescat:imagescat,_id: id,categorieID:categorieID};
    await Scategorie.findByIdAndUpdate(id, scat1); 
    res.json(scat1);}

    //la methode delete 
    export const deleteScategorie = async(req,res)=>{
        const {id}=req.params; //eli jeyni ml url
        if(!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send(`pas de categorie avec un id: ${id}`); 
        await Scategorie.findByIdAndDelete(id); 
        res.json({ message:"categorie deleted successfully."});
}

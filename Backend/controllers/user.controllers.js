import mongoose from 'mongoose';
import User from '../models/user.js'

//GET
export const getUser = async(req,res)=>{
    try{
        const us = await User.find();
        res.status(200).json(us)
    }catch(error){
        res.status(404).json({message:error.message});
    }
}
//POST
export const CreateUser=async(req,res)=>{
    const newUser = new User (req.body)
    try{ 
        await newUser.save();
        res.status(201).json(newUser);
    }catch (error){
        res.status(409).json({message:error.messaage});
    }
}

//GET BY ID
export const getUserByID = async(req,res)=>{
    try{
        const us= await User.findById(req.params);
        res.status(200).json(us) //cnx au serveur mrigla 
    }catch (error){
        res.status(409).json({message:error.messaage});
    }
}

//PUT
export const updateUser = async(req,res)=>{
    const {id}=req.params; //eli jeyni ml url
    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`pas d utilisateur avec un id: ${id}`);
    const us1 = req.body;
    await User.findByIdAndUpdate(id, us1); 
    res.json(us1);}

//DELETE
export const deleteUser= async(req,res)=>{
    const {id}=req.params; //eli jeyni ml url
    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`pas d utilisateur avec un id: ${id}`); 
    await User.findByIdAndDelete(id); 
    res.json({ message:"user deleted successfully."});
}

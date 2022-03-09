import mongoose from"mongoose"
import Categorie from "./categorie.js";
const scategorieSchema=mongoose.Schema({
    nomscategorie:{type:String , required:true},
    imagescat :{type:String , required:false ,unique:true},
    categorieID:{type:mongoose.Schema.Types.ObjectId,//qui fait la referennce entre categorie et sous categorie
    ref:Categorie}
})
const Scategorie=mongoose.model('Scategorie',scategorieSchema)
export default Scategorie
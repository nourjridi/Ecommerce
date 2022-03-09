import mongoose from "mongoose"
import Categorie from "./categorie.js" ;
import Scategorie from "./scategorie.js" ;
const articleSchema=mongoose.Schema({
    reference:{type:String ,required:true ,unique:true},
    designation:{type:String ,required:true ,unique:true},
    prixAchat:{ type:Number ,required:false},
    prixVente:{type:Number ,required:false},
    prixSolde:{type:Number ,required:true },
    marque:{type:String ,required:true ,unique:true},
    qtestock:{type:Number ,required:false},
    caracteristiques:{ type:String ,required:false},
    imageartpetitf:{type:String ,required:false},
    imageartgrandf:{type:Array ,required:false},
    categorieID:{ type:mongoose.Schema.Types.ObjectId, ref:Categorie},
    scategorieID:{ type:mongoose.Schema.Types.ObjectId, ref:Scategorie}

})
const Article=mongoose.model('Article',articleSchema);
export default Article
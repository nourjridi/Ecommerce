import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import categorieRouter from "./routes/categorie.route.js"
import articleRouter from "./routes/article.route.js"
import scategorieRouter from "./routes/scategorie.route.js"
import userRouter from "./routes/user.route.js"
dotenv.config()
const app=express();
app.use(cors())
app.use(express.json());//qui fait liaison entre formulaire cad req.body et l attribut du  modele

//connexion à la base de donnees
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true})
.then(()=>{console.log("coneexion à la base de données réussie");})
.catch(err =>{
    console.log('Impossible de se connecter à la base de données',err);
    process.exit();
});
app.get('/',function(req,res){
    res.send('page de demarrage')
})
app.use ('/api/categories',categorieRouter);
app.use ('/api/articles',articleRouter);
app.use ('/api/scategories',scategorieRouter);
app.use ('/api/users',userRouter);
app.listen(process.env.PORT,() =>{
    console.log(`Serveur run at port ${process.env.PORT}`)
})
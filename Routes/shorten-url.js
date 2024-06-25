import express from 'express';
import { shorturlModel } from '../db_utils/model.js';

const shorturlRouter = express.Router();

shorturlRouter.post('/', async(req,res)=>{
    
    try{
        const longurl = req.body.url;
        const id= Date.now().toString();
        const shorturl = `${process.env.FE_URL}/shorturl/${id}`
        const newurl = new shorturlModel({
            longurl,id,shorturl
        })

        await newurl.save();
        res.send({msg:"Url shortened", shorturl})
    }catch(e){
        console.log(e.message);
        res.status(400).send({msg:"errror in api post"})
    }


})

export default shorturlRouter;
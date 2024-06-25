import express from 'express'
import { shorturlModel } from '../db_utils/model.js';

const redirectrouter = express.Router();


redirectrouter.post('/',async (req,res)=>{
    const data = req.body;
    const urlobj = await shorturlModel.findOne({id:data.url_id});
    if(urlobj){
        res.send({msg:'success',urlobj})
    }else{
        res.status(400).send({msg:'no url found'})
    }
})

export default redirectrouter;
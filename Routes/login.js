
import bcrypt from 'bcrypt';
import express from 'express';
import { userModel } from '../db_utils/model.js';

const loginRouter = express.Router();

loginRouter.post('/', async(req, res)=>{
    const logindata = req.body;

    //check user exist 
    const userobj = await userModel.findOne({email:logindata.email});
    if(userobj){
        console.log(`user ${userobj} crpt data ${userobj.password}`)
        bcrypt.compare(logindata.password , userobj.password, async (err, result )=>{
            if(err){
                res.status(404).send({msg:'something went wrong'})
                console.log(err.message)
            }else{
                if(result){
                    res.status(200).send({msg:'user credentials matched',code:1})
                }else{
                    res.status(404).send({msg:'passsword mot match',code:0})
                }
            }
        })
    }else{
        res.status(404).send({msg:'user not found'});
    }
})


export default loginRouter;
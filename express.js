import express from 'express';
import loginRouter from './Routes/login.js';
import registerRouter from './Routes/register.js';
import cors from 'cors'
import mongooseconnect from './db_utils/mongoosedb.js';
import shorturlRouter from './Routes/shorten-url.js';
import redirectrouter from './Routes/redirect.js';

//server creation
const server = express();


//middelware 
server.use(express.json());

//cors middleware
server.use(cors());

// db connection 
mongooseconnect();

//rourte for this project
server.use('/login', loginRouter);
server.use('/register', registerRouter);
server.use('/shorten-url', shorturlRouter);
server.use('/redirect', redirectrouter);



//server lstening
server.listen((7000),()=>{
    console.log('server listening on port 7000')
})
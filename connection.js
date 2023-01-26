const mongoose=require('mongoose');

require('dotenv').config();

mongoose.set('strictQuery',false);

const connectionParams={
    useNewUrlParser: true, 
    useUnifiedTopology: true
};

const uri=`mongodb+srv://vasanth1:${process.env.PASSWORD}@vasanth1.utruuko.mongodb.net/?retryWrites=true&w=majority`;

const connection=mongoose.connect(uri,connectionParams)
.then(()=>console.log('database connected to cloud atlas'))
.catch((err)=>console.log(err));


module.exports=connection;
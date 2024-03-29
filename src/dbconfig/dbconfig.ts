import mongoose from "mongoose";

export async function connect(){
  try{
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on('connected',()=>{
      console.log('Mongodb Connected Sucessfully');
    })
    connection.on('error',(err)=>{
      console.log('Mondodb connection err'+err);
      process.exit();
    })
  }catch(error){
    console.log('Something went wrong');
    console.log(error);
  }
  
}
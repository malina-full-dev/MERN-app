require('dotenv').config()
const mongoose=require("mongoose")

exports.connectToDB=async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/shopping-cart')
        console.log('connected to DB');
    } catch (error) {
        console.log(error);
    }
}
const mongoose = require('mongoose')


async function connectDB() {
    try 
    {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Database Connected!");
        

    } 
    catch (error) {
        console.error("DB connection error : ", error)

    }

}

module.exports = connectDB






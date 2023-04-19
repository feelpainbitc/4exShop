const express = require('express')
const { callbackify } = require('util')
require('dotenv').config()
const sequelize=require('./db')
const models = require('./models/models')

const PORT=process.env.PORT || 5000

const app =express()


const start = async () =>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${5000}`))
    }
    catch(e){
        console.log(e)
    }
}

start()
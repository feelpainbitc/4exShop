const express = require('express')
const { callbackify } = require('util')
require('dotenv').config()

const PORT=process.env.PORT || 5000

const app =express()

app.listen(PORT, () => console.log(`Server started on port ${5000}`))
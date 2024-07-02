//const axios = require("axios");
const express = require('express');
//const geoip = require("geoip-lite");



const app = express()
const PORT = 8000

app.get('/', (req, res) => {
  const ip = req.header('x-forwarded-for') || req.connection.remoteAddress
  res.send(`Hello World your ip is:${ip}`)
})



app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})

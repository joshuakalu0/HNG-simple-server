//const axios = require("axios");
const express = require('express');
const  satelize  = require('satelize')
const geoip =require("geoip-lite")



const app = express()
const PORT = 8000

app.get('/', (req, res) => {
  const ip = req.header('x-forwarded-for') || req.connection.remoteAddress
  res.send(`Hello World your ip is:${ip}`)
})
app.get("/api/hello", (req, res) => {
  const { visitor_name } = req.query;

  const ip = req.header('x-forwarded-for') || req.connection.remoteAddress
satelize.satelize({ip:ip}, function(err, payload) {

      // res.send(payload);
       res.json(payload)

})
  api_key = "a4f791ec3190105377dcfdf1cf72f27d";
  const url = `http://api.openweathermap.org/data/2.5/find?q=${geo.city}&appid=${api_key}`;
//const response = await axios.get(url);
  //const { temp } = response.data.list[0].main;
 // const c = Math.round(Number(temp) - 273.15)
 const data =geoip.lookup(ip);


  //res.json({
    //client_ip: ip,
   // location: "",
    //greeting: `Hello ${visitor_name}!, the temperature is ${c} degrees celcius in ${geo.city}`,
  //});
})


app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})

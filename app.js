
const { default: axios } = require('axios');
const express = require('express');




const app = express()
const PORT = 8000

app.get('/', (req, res) => {
  const ip = req.header('x-forwarded-for') || req.connection.remoteAddress
  
  res.send(`Hello World your ip is:${ip}`)
})



app.get("/api/hello", (req, res) => {
  const { visitor_name } = req.query;

  const ip = req.header('x-forwarded-for') || req.connection.remoteAddress
  const url =`https://api.ipgeolocation.io/ipgeo?apiKey=55c05094273c478eb9b8a0fa42412c42&ip=${ip}`
  

  api_key = "a4f791ec3190105377dcfdf1cf72f27d";
  
  axios.get(url).then(geo=>{
    const url_two = `http://api.openweathermap.org/data/2.5/find?q=${geo.data.city}&appid=${api_key}`;
    axios.get(url_two).then(response=>{
      const { temp } = response.data.list[0].main;
      const c = Math.round(Number(temp) - 273.15)
      res.json({
    client_ip: ip,
   location: `${geo.data.city}`,
    greeting: `Hello ${visitor_name}!, the temperature is ${c} degrees celcius in ${geo.data.city}`,
  });
      
    })
    })
  
})


app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})

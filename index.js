const { default: axios } = require("axios");
const express = require("express");
const app = express();
var geoip = require("geoip-lite");
const port = 3000;

app.get("/", (req, res) => {
  res.send("server running");
});

app.get("/api/hello", async (req, res) => {
  const { visitor_name } = req.query;

  const test_ip = "207.97.227.239";
  const geo = geoip.lookup(req.ip);
  console.log(geo);
  api_key = "a4f791ec3190105377dcfdf1cf72f27d";
  const url = `http://api.openweathermap.org/data/2.5/find?q=${geo.city}&appid=${api_key}`;
  const response = await axios.get(url);
  const { temp } = response.data.list[0].main;
  const c = Math.round(Number(temp) - 273.15);

  console.log(temp);

  res.json({
    client_ip: ip,
    location: "",
    greeting: `Hello ${visitor_name}!, the temperature is ${c} degrees celcius in ${geo.city}`,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;

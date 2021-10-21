import express from 'express';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use((req, res, next) => {
    console.log(new Date());

    next();
});
// Serving HTML-file
//accept input from farmer too such as defining date range //
app.get("/", function(req, res) {
    console.log("served-html")
    res.sendFile(__dirname + '/fetchedhtml.html');
})
app.get('/search', function (req, res) {
    res.sendFile(__dirname + '/search.html');
  })
      const port=process.env.PORT || 20172
app.listen(port
    , () => {
    console.log("Server running on port " + port);

});
// integrate an API into our application code
fetch("https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=san%20francisco%2Cus&lat=35&lon=139&cnt=10&units=metric%20or%20imperial", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "0462d4d5b8msh8aa6fb4f9ba01e9p1414bejsn527538d2df52"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
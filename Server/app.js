
const http = require("http");
const getCharById = require('./controllers/getCharById');


http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
   
let url = req.url;

if (url.includes('/rickandmorty/character')) {
    const id = parseInt(url.split('/').pop());
    getCharById(res, id);
    
  }
})
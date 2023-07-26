
const http = require("http");
const data = require('./utils/data');


http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
   
let url = req.url;

if (url.includes('/rickandmorty/character')) {
    const id = parseInt(url.split('/').pop());
    
    const character = data.find(character => character.id === id);

if (character) {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(character));
    res.end();
} else {
    res.writeHead(404, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ message: 'Character not found' }));
}
}
}).listen(3001)


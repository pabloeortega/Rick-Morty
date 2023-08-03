const express = require("express");
const server = express();
const router = require("./routes")

const PORT = 3001;

server.use((req, res, next)=>{
  res.header("Access-Control-Origin", '*');
  res.header("Access-Control-Credentials", 'true');
  res.header(
    'Acess-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});


server.use(express.jsoin())
server.use("/rickandmorty",router)

server.listen(PORT, ()=>console.log('server raised in port'+PORT))


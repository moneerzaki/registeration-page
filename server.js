// /*eslint no-undef: "error"*/
// /*eslint-env node*/
// /*global express, cors, app, bodyParser*/
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');


// const app = express(); 
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());
// app.use(cors);
// app.use(express.static('demo'));


// var port = 9000;
// var server = app.listen(port, ()=>{
//     console.log("server is runningg: ");
//     console.log(`running on localhost: ${port}`);
// })

// app.get("/", (req, res) => {
//     res.send("folder found");
// });









let baseURL = 'http://api.animalinfo.org/data/?animal='
let apiKey = '&appid=9f15e45060...';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const newAnimal =  document.getElementById('animal').value;
getAnimal(baseURL,newAnimal, apiKey)

}
const getAnimal = async (baseURL, animal, key)=>{

  const res = await fetch(baseURL+animal+key)
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}









// const http = require('http');
// const port = 3000;

// const server = http.createServer(function(req,res)
// {
//     res.write('hello world');
//     res.end();
// })

// server.listen(port,function(error){
//     if(error)
//     {console.log("sth went wrong" , error);}
//     else 
//     {console.log("server is listening to port ", port);}
// })
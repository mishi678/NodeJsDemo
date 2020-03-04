const  express = require("express");
const route = express.Router();

route.get("/books",function(req,res){
    res.send("Welcome")
})



module.exports =route;
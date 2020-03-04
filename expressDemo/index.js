const exp = require('express');
const routes = require("./routes/route.js")
const app = exp();
const balanceCallback = require("./syncservices/callback-checkbalance");
const balancePromise = require("./syncservices/promise-checkbalance");
const balanceAwitPromise = require("./syncservices/promise-checkbalance");
const port = process.env.PORT || 2001;
app.use('/api/',routes);
app.get("/" ,(req,res)=>{ 
    var name = req.query.name;
    //Example of asyc callback style
    //------------------------------------------------------
    // balanceCallback.balance_check(name ,function(response){
    //     const {error} = response;
    //     if(error){
    //         res.send("hello "+name +", "+JSON.stringify(error));
    //     }else{
    //         res.send("hello "+name +", your account balance is Rs :"+response.result.balance);
    //     }
    // });
    
    //Example of asyc Promise - then style
    //------------------------------------------------------
    // const balance= balancePromise.balance_check(name);
    // balance.then(response=> res.send("hello "+name +", your account balance is Rs :"+response.result.balance))
    //         .catch(error => res.send("hello "+name +", "+JSON.stringify(error)));
    
    //Example of await Promise style
    //------------------------------------------------------
    const balance= balanceAwitPromise.balance_check(name);
    balance.then(response=> res.send("hello "+name +", your account balance is Rs :"+response.result.balance))
            .catch(error => res.send("hello "+name +", "+JSON.stringify(error)));
    


});


console.log(`Starting Express Server on port ${port}`)

app.listen(port)
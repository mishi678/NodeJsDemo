function balance_check(user,callback){
    console.log(`Fetching account details of user :${user}`)
    const authStatus = authenticate(user,callback);
};

function authenticate(user,callback){
    console.log(`Authenticating  user :${user}`);
    if(user == "mishi"){
        //setTimeout to simulate the query delay
        setTimeout(query,2000,user,callback);
    }else{
        callback(
            {"result":{},"error":"Not authorized"}
            );
    }
}

function query(user,callback){
    console.log(`querying balance database for user :${user}`);
    callback(
        {"result":{"accountNo":"123", "balance":"1000","error":""}}
        );
}

module.exports.balance_check = balance_check;
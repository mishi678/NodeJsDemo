function balance_check(user){
    return new Promise ( (resolve,reject)=> {
        const auth = authenticate(user);
        auth.then(response=> {
            const {error} = response;
            if(!error)
                resolve(query(user));
            else
                reject(error);
        } )
        .catch( err=> reject(err))
    })
};

function authenticate(user){
    return new Promise( (resolve,reject)=> {
        console.log(`Authenticating  user :${user}`);
        if(user == "mishi"){
            resolve({"result":"authenticated","error":""});
        }else{
            reject(
                {"result":{},"error":"Not authorized"}
                );
        }
    } );
}

function query(user){
    return new Promise( (resolve,reject)=>{
        setTimeout( () => {
            console.log(`querying balance database for user :${user}`);
            resolve(
            {"result":{"accountNo":"123", "balance":"1000","error":""}}
            );
        },2000)
    } );
}

module.exports.balance_check = balance_check;
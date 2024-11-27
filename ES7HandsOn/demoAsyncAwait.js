function greet(fname , lname){
    return new Promise((resolve, reject)=>{
        if(fname && lname){
            resolve(`Hello, ${fname} ${lname}`);
        }else{
            reject('fName and lname both are required');
        }
    })
}


// asynce and await
async function greetMsg(){
    try{
            // await
        const msg = await greet("Mahure");
        console.log(`Executed Successfully ${msg}`);
    }catch(error){
        console.log(`Excetuion Failed ${error}`);
        
    }
}

// calling the function 
greetMsg();
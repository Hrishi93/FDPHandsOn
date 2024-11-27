function compare(string1 , string2){
    return new Promise((resolve, reject)=>{
        if(string1 === string2){
            resolve(`${string1} and ${string2} Both String are Equal`);
        }else{
            reject('${string1} and ${string2} Both String are Not Equal');
        }
    })
}


// asynce and await
async function result(){
    try{
            // await
        const msg = await compare("Mahure", "Mahure");
        console.log(`Executed Successfully ${msg}`);
    }catch(error){
        console.log(`Excetuion Failed ${error}`);
        
    }
}

// calling the function 
result();
function compare(string1, string2){
    return new Promise ((resolve , recject)=>{
        if(string1 === string2){
            resolve(`${string1} and ${string2} are equal`);
        }else{
            recject(`${string1} and ${string2} are not equal`);
        }
    })
}

// using the promise using then catch // ascii H h 
compare("Hrishi", 'Hrishi' ).then(
    (message)=>{
        console.log(message);
    }
).catch(
    (error)=>{
        console.log(error);
    }

);

// == operator will check only value
// === operator will check value and type

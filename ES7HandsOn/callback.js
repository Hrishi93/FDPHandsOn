function greet(fname , lname){
    console.log(`Hello, ${fname} ${lname}`);
}
//3 sec 

function bye(msg){
    console.log(`Thanks for visiting ${msg}`);
}


function display(fname, lname, msg, callback1, callback2){
    console.log("msg is loading");

    setTimeout( ()=>{
            callback1(fname, lname);
    }, 3000)

    setTimeout ( ()=>{
        callback2(msg)
    }, 5000)
}


display('Hrishikesh', 'Mahure' , "We will see you again" , greet , bye);
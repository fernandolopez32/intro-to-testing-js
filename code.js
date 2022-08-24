// helloWorld function 
const helloWorld = function () {
    return "Hello, World!";
}

// function sayHello(string){
//     if (string === "Alex"){
//         return "Hello, " + string + "!";
//     }else if (string === "Pat"){
//         return "Hello, " + string + "!";
//     }else{
//         return "Hello, Jane!";
//     }
// }

function sayHello(input) {
     if  (input === undefined || input === true || input === false){
        return "Hello, World!";
    }else if (input === input){
        return "Hello, " + input + "!";
    }
}


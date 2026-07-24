alert ("Hi there, Welcome To 0ur Website");
let gender =prompt("Indicate here if you are a Male or Female in uppercase letters");


function Usergender (){
    if (gender === ""){
        alert("You are a Boy!😊");
    }else if(gender === "FEMALE"){
        alert("You are a Girl!😍")
    }else{alert('Please enter the correct gender.')}
};
Usergender();
console.log("jai ram ")

var typed= new Typed(".text",{
strings:["Frontend Developer", "Wab Developer", "Coder Mr Nit😊"],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true

})

let number=document.getElementById("number")

let counter=0;
setInterval(()=>{
    if(counter==95){
        clearInterval();
    }
    else{
 counter+=1;
    number.innerHTML=counter+"%"
    }

   
},30)


let number2=document.getElementById("number2")

let counter2=0;
setInterval(()=>{
    if(counter2==80){
        clearInterval();
    }
    else{
 counter2+=1;
    number2.innerHTML=counter2+"%"
    }

   
},30)


let number3=document.getElementById("number3")

let counter3=0;
setInterval(()=>{
    if(counter3==70){
        clearInterval();
    }
    else{
 counter3+=1;
    number3.innerHTML=counter3+"%"
    }

   
},30)


let number4=document.getElementById("number4")

let counter4=0;
setInterval(()=>{
    if(counter4==60){
        clearInterval();
    }
    else{
 counter4+=1;
    number4.innerHTML=counter4+"%"
    }

   
},30)







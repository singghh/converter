let converter=document.querySelector(".Celsius");
document.querySelector(".button").onclick=process;


function process(){
    let x=converter.value*(9/5)+32;
    if(converter.value<=36 && x<=98.6){
        document.querySelector("#Fahrenheit").innerHTML=`${x} \xB0F`;
        if(x<98.6){
            document.querySelector("#Fahrenheit").style.backgroundColor="#2CD3E1"
        }
    }
    else if(converter.value>=37 && converter.value<=38){
    document.querySelector("#Fahrenheit").innerHTML=`${x} \xB0F`;
        if(x>98.6 && x<=100.4){
            document.querySelector("#Fahrenheit").style.backgroundColor="#F4F2DE";

        }
    }
    else if(converter.value>=38.1 && converter.value<=39){
        document.querySelector("#Fahrenheit").innerHTML=`${x} \xB0F`;

        if(x>100.4 && x<=102.2){
            document.querySelector("#Fahrenheit").style.backgroundColor="#E9B384"
        }
    }
    else if(converter.value>=39.1 && converter.value<=40){
        document.querySelector("#Fahrenheit").innerHTML=`${x} \xB0F`;
        if(x>102.2 && x<=104.0){
            document.querySelector("#Fahrenheit").style.backgroundColor="#FF6666"
        }
    }
    else if(converter.value>=40.1 && converter.value<41.1){
        document.querySelector("#Fahrenheit").innerHTML=`${x} \xB0F`;
        if(x>104.0 && x<=106.0){
            document.querySelector("#Fahrenheit").style.backgroundColor="#FE0000"
        }
    }
    
    else if(converter.value>=41.1){
        document.querySelector("#Fahrenheit").innerHTML=`${x} \xB0F`;
        if(x>106.0){
            document.querySelector("#Fahrenheit").style.backgroundColor="#D71313";
    }
}
    else if(isNaN(converter.value)){
    alert("Please Enter Numbers Only");
}
    else{
    alert("Enter Something")
}
}
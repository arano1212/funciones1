let redLight = "rojo";
let yellowLight= "yellow";
let greenLight = "verde";


console.log(redLight);
console.log(yellowLight);
console.log(greenLight);

function changeLights(){
setTimeout(function(){
    console.log(redLight);

    setTimeout(function(){
        console.log(greenLight);

        setTimeout(function(){
            console.log(yellowLight);
    
            
           changeLights(); 
        
        },2000);   
    
    },2000);
    
},2000);


}
changeLights();
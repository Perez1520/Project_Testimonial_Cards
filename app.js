
/*
var a = {

    A: 0,
    B: 0,
    C: 0,
    D: 0,

   resultado: function(){
    if (a. C > a.B &&
        a.D > a.B && 
        a.D > a.C &&
        a.D < a.A){ 
        
        return  true;
        
    }  
        
        return false;
    
},
intervalo: setInterval(function(){

    a.A = Math.ceil(Math.random()*4)
    a.B = Math.ceil(Math.random()*4)
    a.C = Math.ceil(Math.random()*4)
    a.D = Math.ceil(Math.random()*4)
    
    
    if(a.resultado()){

        clearInterval(a.intervalo);
        console.log("Atleta A", a.A)
        console.log("Atleta B", a.B)
        console.log("Atleta C", a.C)
        console.log("Atleta D", a.D)
        
    }


},10)

}



var b = {
    Mac: {edad:0, velocidad:0, tono:0 },
    Smith: {edad:0, velocidad:0, tono:0 },
    Jack: {edad:0, velocidad:0, tono:0 },
    Willy: {edad:0, velocidad:0, tono:0 },

    resultado: function(){
        if(b.Mac.tono > b.Smith.tono &&
           b.Mac.velocidad > b.Jack.velocidad &&
           b.Mac.edad > b.Jack.edad &&
           b.Willy.velocidad > b.Jack.velocidad   &&
           b.Mac.edad > b.Willy.edad &&
           b.Mac.edad > b.Smith.edad &&
           b.Willy.tono >  b.Smith.tono&&
           b.Smith.velocidad > b.Jack.velocidad && 
           b.Jack.tono > b.Smith.tono
        ){
            return true;
        }

        return false
    },
    intervalo: setInterval(function(){

           b.Mac.edad = Math.ceil(Math.random()*2);
           b.Mac.velocidad = Math.ceil(Math.random()*2);
           b.Mac.tono = Math.ceil(Math.random()*2);

           b.Smith.edad = Math.ceil(Math.random()*2);
           b.Smith.velocidad = Math.ceil(Math.random()*2);
           b.Smith.tono = Math.ceil(Math.random()*2);
           
           b.Jack.edad = Math.ceil(Math.random()*2);
           b.Jack.velocidad = Math.ceil(Math.random()*2);
           b.Jack.tono = Math.ceil(Math.random()*2);

           b.Willy.edad = Math.ceil(Math.random()*2);
           b.Willy.velocidad = Math.ceil(Math.random()*2);
           b.Willy.tono = Math.ceil(Math.random()*2);

        if(b.resultado){

            clearInterval(b.intervalo);
            console.log("Caballo de Mac", b.Mac)
            console.log("Caballo de Smith", b.Smith)
            console.log("Caballo de Jack", b.Jack)
            console.log("Caballo de Willy", b.Willy)
        }



    },1)
}



let nNumber = 5;
let controlImpar = 1;

while(controlImpar <= nNumber){
    console.log(controlImpar)
    controlImpar = controlImpar +2;

}



function ejercicioTres(a = 0, x = 12){
    let result;
    for(let i = 0; i <= x; i++ ){
        result = a * i
        if(i !== 5)console.log(`${a} x ${i} = ${result}` )
    } 
}


ejercicioTres(2, 20)



for(let i = 0; i <= 10; i++)
    if(i !== 5)
    console.log(i)


*/
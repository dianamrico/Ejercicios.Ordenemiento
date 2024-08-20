entrada = [1,4,8,9,85,5,8,7,1,3,0,8,9,4,5]

for (let recorreArray=0; recorreArray < entrada.length; recorreArray++){
    menor =entrada[recorreArray]
    pocision = recorreArray

    //console.log("Ra:",recorreArray)
    for(let encuentraMenor = recorreArray; encuentraMenor< entrada.length; encuentraMenor++){
        //console.log ("em:",encuentraMenor)
        if (menor > entrada [encuentraMenor]){
            menos = menor
            pocision = pocision
        }else{
            menor= entrada[encuentraMenor]
            pocision = encuentraMenor
        }
    }
    entrada[pocision] = entrada[recorreArray]
    entrada[recorreArray] = menor
    console.log(entrada)
}
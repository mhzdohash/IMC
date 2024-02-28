const prompt = require("prompt-sync")()

function getUserInfo(){
   let weight = prompt("Digite seu peso: ")
   let height = prompt("Digite sua altura: ")

    return pessoa = {
        peso: weight,
        altura: height 
    }

}
 function calcImc(pesoInformado,alturaInformado){

    return pesoInformado/alturaInformado**2

 }

 function main(){
    //guarda o objeto do getUserInfo
    let userData = getUserInfo()
    //guarda somente o peso
    let peso = userData.peso
    //guarda somente a altura
    let altura = userData.altura
    //guarda resultado
    let resultadoImc = calcImc(peso,altura)

    if(resultadoImc < 18){
        console.log(`Seu resultado do IMC é ${resultadoImc} e você está abaixo do peso.`)
     }

     else if( resultadoImc <= 25){
        console.log(`Seu resultado IMC é ${resultadoImc} e seu IMC está normal.`)
     }
    
     else if(resultadoImc => 25){
        console.log(`Seu IMC é ${resultadoImc} e você está acima do peso.`)
     }
 }
 
 main()

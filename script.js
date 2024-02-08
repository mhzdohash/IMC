let nome = window.prompt("Qual é seu nome")
 let altura = window.prompt("Qual é sua altura ?")
 let peso = window.prompt("Qual é seu peso ?")

 function calculo(altura,peso){
   IMC = (peso/(altura**2)).toFixed(0)
    return IMC
 }

 window.alert(nome+" seu IMC é de "+calculo(altura,peso))

if(IMC<18.5){
    alert("Baixo peso")
}
else if (24.99>IMC>18.5){
    alert("Normal")
}
else if (29.99>IMC<25){
    alert("Sobrepeso")
}
else if (30<IMC){
    alert("Obesidade")
}


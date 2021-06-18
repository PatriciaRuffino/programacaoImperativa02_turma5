/*crie uma função acaoCarro(), que receberá uma callback como parâmetro.
Após isso, crie duas funções: andar()-deve exibir uma mensagem dizendo que o carro
está andando - e parar()-deve exibir a mensagem que o carro parou
*/


function andar (){
  return  "O carro está andando."
}
 function parar (){
    return "O carro parou." 
}
function acaoCarro (andar,parar){
 
   return console.log(andar(),parar()) 
}
 
acaoCarro(andar,parar);

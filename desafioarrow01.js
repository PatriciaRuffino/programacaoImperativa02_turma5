//transforme as seguintes funções em arrow function
/*  function print(mensagem){
      console.log(mensagem)
    }
    print("Olá, bom dia")
    function soma(n1, n2){
      return n1 + n2
    }
    console.log(soma(10, 10)) */ 

let print = ()=>console.log("Olá, bom dia")
print();

const soma =(n1,n2)=>console.log(n1+n2)
soma(10,10);

let exibir = print => console.log(print);
exibir("Exemplo do Samuel");

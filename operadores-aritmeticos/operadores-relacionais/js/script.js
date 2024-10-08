//Operadores Relacionais

let marca = "Apple"
console.log(marca !== "Samsung")

// = é atribuição
// == é para comparar o valor
// === é para comparar o valor e o formato do conteúdo
// !== é diferente ?


//guardar o valor em uma variável de resultado TRUE?FALSE

let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCPFBloqueado = cpfUsuario === cpfBloqueado

console.log("O usuario está bloqueado ? " + ehCPFBloqueado)



//Operadores maior e menor  < , >

// Maior  >=
let idadeDeCorte = 50
let idadeUsuario = 50

let resultadoEhTerceiraIdade = idadeDeCorte <= idadeUsuario

console.log(resultadoEhTerceiraIdade)



//Menor <=

let idadeMinima = 18
let idadeDoUsuario = 18
let idadePermitidaValida = idadeDoUsuario >= idadeMinima

console.log(idadePermitidaValida)

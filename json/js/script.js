//JSON - JavaScript Object Notation

// chave e valor com o objetivo de transferir dados

let invoice = {
    name: "felipe",
    age: 28,
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["Teclado mecânico", 129.99],
        2: ["Monitor", "899.99"],
        3: ["TV 100 polegadas", "10000.90"]
    },
    taxes: "98.90"
}

generateInvoice(invoice)

function generateInvoice(invoice) {
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("------------")

    for (let index in invoice.products) {
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
}

// Criando dados com JSON

let bichinhos = [
    { "nome": "Bolinha", "cor": "amarelo", "tipo": "pato" },
    { "nome": "Fofinho", "cor": "marrom", "tipo": "coelho" }
];

let bichinhoEscolhido = bichinhos[0];
console.log("O " + bichinhoEscolhido.nome + " é " + bichinhoEscolhido.cor + "!");

let listaParaAmigo = JSON.stringify(bichinhos);
console.log(listaParaAmigo);

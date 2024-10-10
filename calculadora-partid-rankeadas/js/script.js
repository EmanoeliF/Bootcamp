// DEsafio #2 - Calculadora de Partidas Rankeadas

function calcularNivel(vitorias, derrotas) {

    // Cálculo do saldo de vitórias
    
    const saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Determinação do nível com base no número de vitórias

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Exibição da mensagem final
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);

    // Retorno do saldo e nível
    return { saldoVitorias, nivel };
}

// Exemplo de uso da função
const vitorias = 98;
const derrotas = 35;
calcularNivel(vitorias, derrotas);

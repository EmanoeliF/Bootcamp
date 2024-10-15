// Classe Heroi

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = '';

        // Estrutura de decisão para definir o ataque com base no tipo

        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou ataque desconhecido';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criação de heróis e ataques

const mago = new Heroi('Pixanildo', 150, 'mago');
const guerreiro = new Heroi('Simba', 30, 'guerreiro');
const monge = new Heroi('Milo', 40, 'monge');
const ninja = new Heroi('Mimi', 25, 'ninja');

// Testando os ataques
mago.atacar();        // Saída: O mago atacou usando magia
guerreiro.atacar();   // Saída: O guerreiro atacou usando espada
monge.atacar();       // Saída: O monge atacou usando artes marciais
ninja.atacar();       // Saída: O ninja atacou usando shuriken

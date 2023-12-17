class PerfilJogador {
    name: string;
    idade: number;
    tipo: 'guerreiro' | 'mago' | 'monge' | 'ninja';

    constructor(name: string, idade: number, tipo: 'guerreiro' | 'mago' | 'monge' | 'ninja') {
        this.name = name;
        this.idade = idade;
        this.tipo = tipo;
    }

    Atacar = (): void => {
        if (this.tipo === 'guerreiro') {
            console.log(`${this.tipo} atacando usando espada`);
        } else if (this.tipo === 'mago') {
            console.log(`${this.tipo} atacando usando magia`);
        } else if (this.tipo === 'monge') {
            console.log(`${this.tipo} atacando usando artes marciais`);
        } else if (this.tipo === 'ninja') {
            console.log(`${this.tipo} atacando usando artes shuriken`);
        } else {
            console.log(`misterio atacando usando artes misterio`);
        }
    };
}

const guerreiro = new PerfilJogador('Carlos', 17, 'guerreiro');
guerreiro.Atacar()
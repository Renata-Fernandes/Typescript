export class Pessoa{
    private nome:string;

    constructor(nome:string){
        this.nome = nome;
    }

    public showPessoa():void{
        console.log(`Nome: ${this.nome}`);
    }

    public toString():string{
        return `Classe Pessoa, nome: ${this.nome}`;
    }
}
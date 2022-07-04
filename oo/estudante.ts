import { Pessoa } from "./pessoa";

export class Estudante extends Pessoa{  

    constructor(nome:string){
        super(nome);
    }

    public showPessoa(): void {
        console.log("Estudante ....");
        super.showPessoa();
    }
}
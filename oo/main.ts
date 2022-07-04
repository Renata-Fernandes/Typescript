import { Estudante } from "./estudante";
import { IRepositoryBase } from "./irepositorybase";
import { Pessoa } from "./pessoa";
import { PessoaRepository } from "./pessoarepository";

let p = new Pessoa ('Renata');
p.showPessoa();

let e = new Estudante("Sophie");
e.showPessoa();

let pessoaRepo: IRepositoryBase = new PessoaRepository();
pessoaRepo.insert(p);
pessoaRepo.insert(e);

pessoaRepo.findAll();
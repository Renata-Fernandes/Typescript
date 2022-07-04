"use strict";
exports.__esModule = true;
exports.PessoaRepository = void 0;
var pessoa_1 = require("./pessoa");
var PessoaRepository = /** @class */ (function () {
    function PessoaRepository() {
    }
    PessoaRepository.prototype.insert = function (pessoa) {
        console.log('Inserindo pessoa.....', pessoa.toString());
        return true;
    };
    PessoaRepository.prototype.update = function (pessoa) {
        console.log('Atualizando pessoa.....', pessoa.toString());
        return true;
    };
    PessoaRepository.prototype["delete"] = function (id) {
        console.log('Deletando pessoa.....');
        return true;
    };
    PessoaRepository.prototype.findById = function (id) {
        return null;
    };
    PessoaRepository.prototype.findAll = function () {
        return [new pessoa_1.Pessoa('Felipe')];
    };
    return PessoaRepository;
}());
exports.PessoaRepository = PessoaRepository;

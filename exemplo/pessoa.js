"use strict";
var empresa;
(function (empresa) {
    var Pessoa = /** @class */ (function () {
        //obriga a pessoa a colocar o cpf, não sera indefinido.
        function Pessoa(nome, cpf) {
            this.cpf = cpf;
            this.nome = nome;
        }
        //usa-se só o get para nao poder alterar o valor.
        Pessoa.prototype.getCpf = function () {
            return this.cpf;
        };
        //pega/mostra o valor.
        Pessoa.prototype.getNome = function () {
            return this.nome;
        };
        //altera o valor.
        Pessoa.prototype.setNome = function (nome) {
            this.nome = nome;
        };
        Pessoa.prototype.getIdade = function () {
            return this.idade;
        };
        Pessoa.prototype.setIdade = function (idade) {
            this.idade = idade;
        };
        return Pessoa;
    }());
    empresa.Pessoa = Pessoa;
})(empresa || (empresa = {}));

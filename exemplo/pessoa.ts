namespace empresa{
    class Pessoa{
        //informações da classe.
        private nome:string;
        private cpf:string;
        private idade:number | undefined;

        //obriga a pessoa a colocar o cpf, não sera indefinido.
        constructor(nome:string, cpf:string){
            this.cpf = cpf;
            this.nome = nome;
        }

         //usa-se só o get para nao poder alterar o valor.
        getCpf():string{
            return this.cpf;
        }

        //pega/mostra o valor.
        getNome():string | undefined{
            return this.nome;
        }

        //altera o valor.
        setNome(nome:string):void{
            this.nome = nome;
        }

        getIdade():number | undefined{
            return this.idade;
        }

        setIdade(idade:number):void{
            this.idade = idade;
        }


    }
}
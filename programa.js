const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
let cadastro = [];

const pedro = {
    nome: "Pedro",
    cargo: "RH",
    salario: 4000
};
cadastro.push(pedro);
const joao = {
    nome: "João",
    cargo: "Gerente",
    salario: 8000
};
cadastro.push(joao);
const ana = {
    nome: "Ana",
    cargo: "Diretora",
    salario: 15000
};
cadastro.push(ana);
const julia = {
    nome: "Julia",
    cargo: "TI",
    salario: 7000
};
cadastro.push(julia);

function menu()
{
console.log("\n==== MENU ====");
console.log("===============");
console.log("1 - Cadastrar Funcionário");
console.log("2 - Editar Funcionário")
console.log("3 - Pesquisar Por Nome");
console.log("4 - Listar Todos os Funcionários");
console.log("5 - Excluir Um Funcionário");
console.log("6 - Funcionário Com Maior Salário");
console.log("7 - Funcionário Com Menor Salário");
console.log("0 - SAIR");
console.log("===============");
// O que vêm depois?

rl.question("Digite o opção desejada: ", (input) => {
    let opcao = parseInt(input)
    switch (opcao) {
        case 1:
            limparTexto();
            console.log("Opção 1: Cadastrar Funcionário");
            cadastrar();
            break;
        case 2:
            limparTexto();
            console.log("Opção 2: Editar Funcionário");
            editar();
            break;
        case 3:
            limparTexto();
            console.log("Opção 3: Pesquisar por Nome");
            pesquisar();
            break;
        case 4:
            limparTexto();
            console.log("Opção 4: Listar Funcionários");
            listar();
            break;
        case 5: 
            limparTexto();
            console.log("Opção 5: Excluir Funcionário");
            deletar();
            break;
        case 6:
            limparTexto();
            console.log("Opção 6: Maior Salário");
            maiorSalario();
            break
        case 7:
            limparTexto();
            console.log("Opção 7: Menor Salário");
            menorSalario();
            break
        case 0:
            limparTexto();
            console.log("Encerrando o cadastro");
            rl.close();
            break;
        default:
            limparTexto();
            console.log("Opção inválida!");
            menu();
            break;
        };

});
};

function cadastrar () {
    rl.question("Digite o nome do funcionário: ", (i1) => {
        limparTexto();
        rl.question("Digite o cargo do funcionário: ", (i2) => {
            limparTexto();
            rl.question("Digite o salário do funcionário: ", (i3) => {
                limparTexto();
                let funcionarios = {
                    nome: i1,
                    cargo: i2,
                    salario: parseFloat(i3)
                };
                cadastro.push(funcionarios);
                console.log("Funcionário adicionado", funcionarios);
                voltarMenu();
            });
        });
    });
};

function pesquisar() {
    rl.question("Digite o nome do funcionário: ", (i) => {
        limparTexto();
        let buscar = cadastro.filter(function(element){
            return element.nome === i;
            });
        if (buscar.length > 0){
            console.table(buscar);
            voltarMenu();
        } else{
            console.log("O funcionário não está cadastrado!");
            voltarMenu();
        };
        
    });
};

function editar() {
    console.table(cadastro);
    rl.question("Digite o indice do funcionário que você deseja alterar?: ", (i) => {
        rl.question("Digite o novo nome do funcionário: ", (i1) => {
            limparTexto();
            rl.question("Digite o novo cargo do funcionário: ", (i2) => {
                limparTexto();
                rl.question("Digite o novo salário do funcionário: ", (i3) => {
                    limparTexto();
                    cadastro[i].nome = i1;
                    cadastro[i].cargo = i2;
                    cadastro[i].salario = i3;
                    console.log("Funcionário editado", cadastro[i]);
                    voltarMenu();
                });
            });
        });
    });
};

function listar () {
    if (cadastro.length === 0){
        console.log("Ainda não existem funcionários cadastrados");
        voltarMenu();
    } else {
        console.table(cadastro);
        voltarMenu();
    };
};

function deletar() {
    console.table(cadastro);
    rl.question("Digite o indice do funcionário que deseja excluir: ", (i) =>{
        cadastro.splice(i, 1);
            console.log("Funcionário Deletado!");
            voltarMenu();
    });
};

function maiorSalario(){
    let salarioMaior = 0;
    let funcionariosSalarioMaior = [];
    for (let i = 0; i < cadastro.length; i++){
        if (cadastro[i].salario >= salarioMaior) {
            if (cadastro [i].salario > salarioMaior){
                funcionariosSalarioMaior = [];
            }
            salarioMaior = cadastro[i].salario;
            funcionariosSalarioMaior.push(cadastro[i]);
        };
    };
    console.log(funcionariosSalarioMaior);
    if (funcionariosSalarioMaior.length > 1) {
        funcionariosSalarioMaior.forEach(element => {
            console.log("A maior salário é:", salarioMaior);
            console.log(`Os funcionarios com maiores salários são: ${element.nome}, com a salário de: ${element.salario}`);
        });
    } else {
        console.log("A maior salário é:", salarioMaior);
        console.log(`O Funcionário com a maior salários é: ${funcionariosSalarioMaior[0].nome}, com a salário de: ${funcionariosSalarioMaior[0].salario}`);
    };
    voltarMenu();
};

function menorSalario(){
    let salarioMenor = 0;
    let funcionariosSalarioMenor = [];
    for (let i = 0; i < cadastro.length; i++){
        if (i == 0) {
            salarioMenor = cadastro[i].salario;
        }
        if (cadastro[i].salario <= salarioMenor) {
            if (cadastro [i].salario < salarioMenor){
                funcionariosSalarioMenor = [];
            }
            salarioMenor = cadastro[i].salario;
            funcionariosSalarioMenor.push(cadastro[i]);
        };
    };
    if (funcionariosSalarioMenor.length > 1) {
        funcionariosSalarioMenor.forEach(element => {
            console.log(`Os funcionarios com menores salários são: ${element.nome}, com a salário de: ${element.salario}`);
            console.log("A menor salário é:", salarioMenor);
        });
    } else {
        console.log("A menor salário é:", salarioMenor);
        console.log(`O Funcionário com a menor salários é: ${funcionariosSalarioMenor[0].nome}, com a salário de: ${funcionariosSalarioMenor[0].salario}`);
    };
    voltarMenu();
};

function limparTexto() {
    console.clear();
}

function voltarMenu(){
    rl.question("Precione enter para voltar ao menu!", (i) =>{
        limparTexto();
        menu();
    });
}

menu();
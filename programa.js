let readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lembretes = [];

function menu() {
    console.clear();
    console.log("========Lembretes========");
    console.log("1-Adicionar lembrete.");
    console.log("2-Listar lembretes.");
    console.log("3-Editar lembrete.");
    console.log("4-Marcar lembrete como concluido.");
    console.log("5-Excluir lembrete.");
    console.log("6-Sair");

let entrada = "";
rl.question("Digite a opção que você deseja: ", (input) => {
    entrada = parseFloat(input);
    switch (entrada) {
        case 1:
            limparTexto();
            console.log("Opção 1: Adicionar Lembrete.");
            lembrete();
            break;
        case 2:
            limparTexto();
            console.log("Opção 3: Listar Lembretes.");
            listar();
            break;
        case 3:
            limparTexto();
            console.log("Opção 3: Editar Lembrete.");
            editar();
            break;
        case 4:
            limparTexto()
            concluido();
            console.log("Opção 4: Marcar Lembrete como concluído.");
            break; 
        case 5: 
            limparTexto();
            console.log("Opção 5: Excluir Lembrete.");
            deletar();
            break;
        case 6:
            limparTexto();
            console.log("Encerrando o cadastro");
            rl.close();
            break;
        default:
            limparTexto();
            console.log("Opção inválida!");
            menu();
            break;
        }
    });
};
        
function lembrete() {
    rl.question("Digite o seu novo lembrete: ", (input1) => {
        rl.question("Digite o prazo a ser cumprido do lembrete: ", (input2) => {
            let novoLembrete = {
                lembrete: input1,
                prazo: input2,
                concluido: false
            };
            lembretes.push(novoLembrete);
            console.log("===*Lembrete adicionando!*===");
            voltarMenu();
        });
    });
};

function listar(voltarmenu = true) {
    if (lembretes.length === 0){
        console.log("Ainda não existem lembretes cadastrados!");
        if (voltarmenu) {
            voltarMenu();
        }
    } else {
        lembretes.forEach((element, i) => 
        console.log(`${i+1}. ${element.lembrete} - Prazo: ${element.prazo} - ${element.concluido ? 'Concluido' : 'Pendente'}`));
        if (voltarmenu) {
            voltarMenu();
        }
    }
};
        
function editar() {
    if (lembretes.length != 0) {
        listar(false);
        rl.question("Digite o index do lembrete que deseja editar: ", (i) => {
            rl.question("Digite o seu novo ou o mesmo lembrete: ", (i1) => {
                rl.question("Digite o prazo editado do seu lembrete: ", (i2) =>  {
                    lembretes[i-1].lembrete = i1;
                    lembretes[i-1].prazo = i2;
                    console.log("===*Lembrete editado!*===");
                    voltarMenu();
                });
            });
        });
    } else {
        console.log("Você ainda não possui lembretes!");
        console.log("Se deseja adicionar algum lembrete novo, volte ao Menu!");
        voltarMenu();
    };
};

function listarPendente(){
    for (let i = 0; i < lembretes.length; i++){
        if (lembretes[i].concluido === false) {
            console.log(`${i+1}. ${lembretes[i].lembrete} - Prazo: ${lembretes[i].prazo} - ${lembretes[i].concluido ? 'Concluido' : 'Pendente'}`);
        };
    };
};

function concluido() {
    listarPendente();
    if (lembretes.concluido === false) {
        rl.question("\nDigite o index do lembrete que deseja marcar como concluído: ", (index) => {
            lembretes[parseInt(index)-1].concluido = true;
            console.log("Concluído com sucesso!");
            voltarMenu();
        });
    } else {
        console.log("Você não tem lembretes pendentes!");
        console.log("Se deseja adicionar algum lembrete novo, volte ao Menu!");
        voltarMenu();
    }
};

function deletar(){
    if (lembretes.length != 0) {
        listar(false);
        rl.question("Qual o numero do lembrete que deseja excluir ?", (i) => {
        lembretes.splice(i-1,1);
        console.log("Lembrete excluido!");
        voltarMenu();
        });
    } else {
        console.log("Ainda não existem lembretes!");
        console.log("Se deseja adicionar algum lembrete novo, volte ao Menu!");
        voltarMenu();
    };
};
        
function limparTexto() {
    console.clear();
}
        
function voltarMenu(){
    rl.question("Precione enter para voltar ao menu!", (i) =>{
        limparTexto();
        menu();
    });
};
        
menu();
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
            };
            lembretes.push(novoLembrete);
            console.log("===*Lembrete adicionando*===");
            voltarMenu();
        });
    });
};

function listar() {
    if (lembretes.length === 0){
        console.log("Ainda não existem lembretes cadastrados!");
        voltarMenu();
    } else {
        lembretes.forEach((element) => console.log(element));
        voltarMenu();
    }
};
        
function editar() {
    console.table(lembretes);
    rl.question("Digite o index do lembrete que deseja ediatr: ", (i) => {
        rl.question("Digite o seu novo ou o mesmo lembrete: ", (i1) => {
            rl.question("Digite o prazo editado do seu lembrete: ", (i2) =>  {
                lembretes[i].lembrete = i1;
                lembretes[i].prazo = i2;
                console.log("Lembrete editado!");
                voltarMenu();
            });
        });
    });
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
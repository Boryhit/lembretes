let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lembretes = [];
menuLembrete();

function menuLembrete() {
  console.clear();
  console.log("========Lembretes========");
  console.log("1-Adicionar lembrete.");
  console.log("2-Listar lembretes.");
  console.log("3-Editar lembrete.");
  console.log("4-Marcar lembrete como concluido.");
  console.log("5-Sair");
  let entrada = "";
  rl.question("Digite a opção que você deseja: ", (input) => {
    entrada = parseFloat(input);
    switch (entrada) {
      case 1:
        console.clear();
        lembrete();
        break;

      case 2:
        console.table(lembretes);
        break;

      case 3:
        editar();
        break;

      case 4:
        concluido();
        break;  
    }
  });
}

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

function voltarMenu() {
  rl.question("Digite ENTER para voltar para o menu: ", (input9) => {
    menuLembrete();
  });
}
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
}

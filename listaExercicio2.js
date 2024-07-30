/*
//Questão 01:
let num = 0;

while(num < 50){
    num++;
    if(num%2 == 0){
        console.log(`O número ${num} é par.`);
    } else {
        console.log(`O número ${num} é  ímpar.`);
    }
}
*/
/*
for(let num = 1; num <= 50; num++){
    if(num%2 == 0){
        console.log(`O número ${num} é par.`);
    } else {
        console.log(`O número ${num} é  ímpar.`);
    }
}
*/
/*
let num = 0;

while(num < 100){
    num++;
    if(num%3 == 0){
        console.log(`O número ${num} é múltipli de três.`);
    }
}
*/
/*
for(let num = 1; num <= 100; num++){
    if(num%3 == 0){
        console.log(`O número ${num} é múltipli de três.`);
    }
}
*/
/*
let num = 100;
while(num >= 0){
    console.log(num);
    num -= 2;
}
*/
/*
for(let num = 100; num >= 0; num -= 2){
    console.log(num);
}
*/
/*
//Questão 02:
for(let num = 1; num < 40; num++){
    if(num%4 == 0){
        console.log("PIM");
    }else {
        console.log(num);
    }
}
*/
/*
//Questão 03.1:
let notas = [];
let resposta;
let resultado = 0;

while(resposta != "SAIR"){
    resposta = prompt("Digite a nota dos seus alunos. Quando acabar, digite 'SAIR'");
    if(resposta == "SAIR"){
        media();
    } else{
        notas.push(parseFloat(resposta));
        console.log(notas);    
    }
}

function media(){
    for(let count = 0; count < notas.length; count++){
        resultado = resultado + notas[count];
    }
    resultado /= notas.length;
    alert(`A média é ${resultado}`);
}
*/
/*
//Questão 03.2:
let aluno1 = {
  nome: "Eidolon",
  mediaPortugues: 8.5,
  mediaMatematica: 9.5,
};
let aluno2 = {
  nome: "Kenny",
  mediaPortugues: 7.5,
  mediaMatematica: 8.5,
};

let lider = [];

escolherLider(
  aluno1.nome,
  aluno2.nome,
  aluno1.mediaPortugues,
  aluno1.mediaMatematica,
  aluno2.mediaPortugues,
  aluno2.mediaMatematica
);

function escolherLider(
  nomeAluno1,
  nomeAluno2,
  mediaPortAluno1,
  mediaPortAluno2,
  mediaMatAluno1,
  mediaMatAluno2
) {
  if (mediaPortAluno1 > mediaPortAluno2) {
    lider.push(aluno1);
  } else if (mediaPortAluno1 == mediaPortAluno2) {
    if (mediaMatAluno1 > mediaMatAluno2) {
      lider.push(aluno1);
    } else if (mediaMatAluno1 == mediaMatAluno2) {
      console.log("Os alunos estão empatados em todos os quesitos.");
    } else {
      lider.push(aluno2);
    }
  } else {
    lider.push(aluno2);
  }
}
console.log(lider);
*/
/*
//Qestão 04:
let pessoa = [
  (nome = "Eidolon"),
  (idade = 22),
  (cpf = 6190776543),
  (altura = 172),
  (maiorDeIdade = true),
];

console.log(pessoa);
*/
/*
//Questão 05:
let pessoa = [
  (nome = "Eidolon"),
  (idade = 22),
  (cpf = 6190776543),
  (altura = 172),
  (maiorDeIdade = true),
];

console.log(pessoa[0]);
console.log(pessoa.length);
console.log(pessoa[pessoa.length - 1]);
*/
/*
//Questão 06:
let aluno = {
  nome: "Eidolon",
  disciplina: "Matemática",
  notaProva: 5,
  notaTrabalho: 8.5,
};

inserirNotas(aluno.nome, aluno.disciplina, aluno.notaProva, aluno.notaTrabalho);

function inserirNotas(nomeEstudante, disciplina, notaProva, notaTrabalho) {
  let calcularMedia = (notaProva + notaTrabalho) / 2;
  calcularMedia >= 7
    ? console.log(`O aluno ${aluno.nome} está aprovado`)
    : console.log(
        `Email - Nome aluno: ${aluno.nome}, Disciplina abaixo da média: ${aluno.disciplina}, Média do bimestre: ${calcularMedia}`
      );
}
*/
/*
//Questão 07:
let pets = [];
let nomeTutor, telefone, nomePet, especie, cor, cadastrar;
alert("Bom dia!!! Tudo bem? Espero que sim. Tenha um bom cadastro do seu pet");
while (cadastrar != "Não") {
  nomeTutor = prompt("Infome o nome do tutor ou tutora:");
  telefone = prompt("Infome seu telefon:");
  nomePet = prompt("Infome o nome do seu pet:");
  especie = prompt("Infome o especie do seu pet:");
  cor = prompt("Infome a cor do seu pet:");
  cadastrarPet(nomeTutor, telefone, nomePet, especie, cor);
  cadastrar = prompt("Deseja cadastrar mais um pet?");
}

function cadastrarPet(nomeTutor, telefone, nomePet, especie, cor) {
  let pet = {
    nomeTutor: nomeTutor,
    telefone: telefone,
    petNome: nomePet,
    petEspecie: especie,
    petCor: cor,
  };

  pets.push(pet);
}

console.log(pets);
*/
/*
//Questão 08:
let letras = [];
count = 0;
while (count < 10){
  count++;
  letras.push(prompt(`Informe a ${count} letra:`));
}
console.log(letras);
*/
/*
//Questão 09:
let letras = [];
count = 0;
while (count < 10){
  count++;
  letras.push(prompt(`Informe a ${count} letra:`));
}
console.log(letras[0]);
console.log(letras[3]);
console.log(letras[4]);
console.log(letras[letras.length - 1]);
console.log(letras.length);
*/
/*
//FIQUEI EM DÚVIDA DE COMO FAZER ESSA DA FORMA CORRETA
//Questão 10:
let nome, destino, valorPassagem, diariaHotel, valorGuia, custoViagem;
let viagens = [];
let count = 0;
while(count < 3){
  count++;
  nome = (prompt("Informe o seu nome:"));
  destino = prompt(`Informe o seu ${count} destino:`);
  valorPassagem = prompt(`${nome}, Informe o valor da passagem para ${destino}:`);
  diariaHotel = prompt(`${nome}, Informe o valor total de acomodação:`);
  valorGuia = prompt(`${nome}, informe o valor do guia:`);
  custoViagem = prompt(`${nome}, informe o custo total da viagem:`);
  cadastrarViagem(nome, destino, valorPassagem, diariaHotel, valorGuia, custoViagem);
}

function cadastrarViagem(nome, destino, valorPassagem, diariaHotel, valorGuia, custoViagem){
  let viagem = {
    nome: nome,
    destino: destino,
    valorPassagem: valorPassagem,
    diariaHotel: diariaHotel,
    valorGuia: valorGuia,
    custoViagem: custoViagem
  };
  viagens.push(viagem);
}
alert(`Olá, ${viagens[0,1]}! É um prazer termos você como cliente e estamos ansiosos para que sua viagem possa ocorrer em breve!
Estou te encaminhando os orçamentos!
${viagens[0,1]}
Passagens: R$ 13996
Acomodação (5 dias) de R$ 1286
O guia local custará R$ 3250
Total R$ 18532
---
${viagens[1,1]}
Passagens: R$ 9160
Acomodação (5 dias) de R$ 443
O guia local custará R$ 176
Total R$ 9779
---
${viagens[2,1]}
Passagens: R$ 5119
Acomodação (5 dias) de R$ 102
O guia local custará R$ 140
Total R$ 5361
`);
*/
/*
//Questão 11:
let codigoEmail = 9999;
let senhaUsuario = 1234;
let count;

pagar();
function pagar(){
  count = 3;
  let pagar = parseInt(prompt("Se deseja relizar pagamento, digite 1, ou 2 para cancelar"));
  pagar == 1 ? comprar(parseInt(prompt("Informe a sua senha para que a compra seja efetivada:"))) : alert("Pagamento cancelado");
}
function comprar(senha){
  while(senha != senhaUsuario){
    count--;
    if(count == 0){
      let resposta = prompt("Cartão bloqueado. Se deseja ir a uma agência, digite 'A' ou se deseja desbloquear com sua chave de segurança, digite 'D'")
      resposta == "A" ? alert("Será um prazer atendela em uma agência.") : desbloquear(parseInt(prompt("Digite a chave de segurança que foi enviada para seu e-mail cadastrado")));
    } else {
        comprar(parseInt(prompt(`Senha incorreta! Você tem mais ${count} tentativas:`)));
    }
  }
  alert("Compra efetivada. Muito obrigado!");
}

function desbloquear(chaveDeSeguranca){
  chaveDeSeguranca == codigoEmail ? senhaUsuario = parseInt(prompt("Redefina sua senha:")) : alert("Código incorreto, você deve ir a uma agência");
  pagar();
}
*/
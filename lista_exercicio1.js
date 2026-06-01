/* 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if. */
let numInteiro = 13;

if (numInteiro % 2 == 0) {
  console.log(`O número ${numInteiro} é par`);
} else {
  console.log(`O número ${numInteiro} é ímpar`);
}

/* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else. */
let idade = 80;

if (idade < 13) {
  console.log("Você é criança");
}
if (idade >= 13 && idade < 18) {
  console.log("Você é adolescente");
}
if (idade >= 18 && idade < 60) {
  console.log("Você é adulto");
} else {
  console.log("Você é idoso");
}

/* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado",
"Recuperação", ou "Reprovado" utilizando if-else if. */
let nota = 4;

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota < 7 && nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */
console.log("Selecione o sabor do seu sorvete:");
console.log("1 - Chocolate");
console.log("2 - Morango");
console.log("3 - Creme");
console.log("4 - Napolitano");

let saborSorvete = 4;

switch (saborSorvete) {
  case 1:
    console.log("Sabor selecionado: Chocolate");
    break;

  case 2:
    console.log("Sabor selecionado: Morango");
    break;

  case 3:
    console.log("Sabor selecionado: Creme");
    break;

  case 4:
    console.log("Sabor selecionado: Napolitano");
    break;

  default:
    console.log("Digite um valor válido");
    break;
}

/* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else. */
let peso = 170;
let altura = 1.72;
let imc = peso / altura ** 2;
console.log(imc.toFixed(2));

if (imc < 18.5) {
  console.log(`Baixo peso - IMC ${imc.toFixed(2)}`);
} else if (imc >= 18.5 && imc < 25) {
  console.log(`Peso normal - IMC ${imc.toFixed(2)}`);
} else if (imc >= 25 && imc < 30) {
  console.log(`Sobrepeso - IMC ${imc.toFixed(2)}`);
} else {
  console.log(`Obesidade - IMC ${imc.toFixed(2)}`);
}

/* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
● Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C <
A + B
● Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
● Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
● Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */
const PROMPT = require("prompt-sync")({ sigint: true });
let A;
let B;
let C;

A = Number(PROMPT("Digite o primeiro número: "));
B = Number(PROMPT("Digite o segundo número: "));
C = Number(PROMPT("Digite o terceiro número: "));

if (A < B + C && B < A + C && C < A + B) {
  if (A == B && A == C && B == C) {
    console.log("É um triângulo Equilátero");
  } else if (A == B || A == C || B == C) {
    console.log("É um triângulo Isósceles");
  } else {
    console.log("É um triângulo Escaleno");
  }
} else {
  console.log("Os valores informados não formam um triângulo");
}

/* 7. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a
média aritmética desses números. */
let numeroDigitado;
numeroDigitado = Number(PROMPT("Digite um número: "));
let quantidade = 0;
let soma = 0;

while (numeroDigitado !== 0) {
  soma += numeroDigitado;
  quantidade++;
  numeroDigitado = Number(PROMPT("Digite um número: "));
}

let media = soma / quantidade;
console.log(`Média da soma dos números digitados: ${media}`);

/* 8. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando
um loop for ou while. */
let numeroFornecido;
numeroFornecido = Number(PROMPT("Digite um número para saber seu fatorial: "));
let fatorial = 1;

for (let iterador = numeroFornecido; iterador >= 1; iterador--) {
  fatorial *= iterador;
}

console.log(`O fatorial do número ${numeroFornecido}: ${fatorial}`);

/* 9. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for. */
let n = 10;
let fibonacci = [0, 1];

for (i = 2; i < n; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(`Primeiros 10 número da sequência ${fibonacci}`);

/*10. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados. */
let nomes = [];
for (let add = 0; add < 7; add++) {
  nomes[add] = PROMPT(`Informe nome ${add + 1}: `);
}

console.log(nomes.reverse());
console.table(nomes.reverse());
console.log(`Nomes fornecidor em ordem inversa: ${nomes.reverse().join(", ")}`);

/* 11. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade. */
let nomePessoas = [];
let idadePessoa = [];

for (let indice = 0; indice < 9; indice++) {
  nomePessoas[indice] = PROMPT(`Digite o nome da pessoa ${indice + 1}: `);
  idadePessoa[indice] = Number(PROMPT("Digite a idade: "));
}

for (let indice = 0; indice < idadePessoa.length; indice++) {
  if (idadePessoa[indice] < 18) {
    console.log(
      `Pessoas menores de idade: ${nomePessoas[indice]} - ${idadePessoa[indice]} anos`,
    );
  }
}

/**12. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa
e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso
ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. */
let alt = Number(PROMPT("Digite sua altura: ").replace(",", "."));
let gen = PROMPT("Digite seu sexo (m/h): ").toLowerCase();

function pesoIdeal(alt, gen) {
  if (gen == "m") {
    return alt * 62.1 - 44.7;
  } else if (gen == "h") {
    return alt * 72.7 - 58;
  } else {
    return console.log("Digite um valor válido!");
  }
}

let calculoPeso = pesoIdeal(alt, gen);
console.log(`Seu peso ideal é: ${calculoPeso}`);

/* 13. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no
seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
○ Matrícula:
○ Nome:
○ Salário bruto:
○ Dedução INSS:
○ Salário líquido:
○ (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a
redução do INSS). */
let dadosFolha = [
  {
    matricula: 789,
    nome: "Grampola",
    salarioBruto: 5000,
  },

  {
    matricula: 879,
    nome: "Pumba",
    salarioBruto: 5500,
  },

  {
    matricula: 695,
    nome: "Amora",
    salarioBruto: 2500,
  },

  {
    matricula: 725,
    nome: "Paçoca",
    salarioBruto: 3750,
  },

  {
    matricula: 929,
    nome: "Cocada",
    salarioBruto: 4260,
  },

  {
    matricula: 699,
    nome: "Ludimila",
    salarioBruto: 6500,
  },

  {
    matricula: 954,
    nome: "Chispita",
    salarioBruto: 6125,
  },
];

for (let funcionario of dadosFolha) {
  let deducaoInss = funcionario.salarioBruto * 0.12;
  let salarioLiquido = funcionario.salarioBruto - deducaoInss;

  console.log(`
        Matrícula: ${funcionario.matricula}
        Nome: ${funcionario.nome}
        Salário Bruto: ${funcionario.salarioBruto.toFixed(2)}
        Dedução INSS: ${deducaoInss.toFixed(2)}
        Salário Líquido: ${salarioLiquido.toFixed(2)}
        ----------------------------------------------------------
        `);
}

/* 14. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, o maior salário e o percentual de pessoas com salário até
R$350,00. */
function dadosPopulacao() {
  let salario;
  let filhos;
  let somaSalario = 0;
  let numFilhos = 0;
  let maiorSalario = 0;
  let salario350 = 0;
  let continua = "s";
  let totalPessoas = 0;

  while (continua === "s") {
    salario = Number(PROMPT("Qual seu salário em R$? "));
    filhos = Number(PROMPT("Quantos filhos você tem? "));

    somaSalario += salario;
    numFilhos += filhos;
    totalPessoas++;

    continua = PROMPT("Deseja cadastrar outra pessoa?(s/n) ".toLowerCase());

    if (salario > maiorSalario) {
      maiorSalario = salario;
    }

    if (salario <= 350) {
      salario350++;
    }
  }

  let mediaSalario = somaSalario / totalPessoas;
  let mediaFilhos = numFilhos / totalPessoas;
  let percentual = (salario350 / totalPessoas) * 100;

  return {
    mediaSalario: mediaSalario.toFixed(2),
    mediaFilhos: mediaFilhos.toFixed(1),
    maiorSalario: maiorSalario.toFixed(2),
    percentual: percentual.toFixed(2),
  };
}

let resultadosPop = dadosPopulacao();
console.table(resultadosPop);

/* 15. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal principal são iguais a 1 e os demais são nulos. */
let dadosMatriz = 7;
let MI = [];

for (let i = 1; i <= dadosMatriz; i++) {
  MI[i] = [];
  for (let j = 1; j <= dadosMatriz; j++) {
    if (i === j) {
      MI[i][j] = 1;
    } else {
      MI[i][j] = null;
    }
  }
}

console.log("Matriz identidade MI[1..7,1..7]: ");

for (let i = 1; i <= dadosMatriz; i++) {
  let linha = "";
  for (let j = 1; j <= dadosMatriz; j++) {
    linha += MI[i][j] + " ";
  }
  console.log(linha);
}

/* 16. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M. */
const linha = 3;
const coluna = 2;

let matriz = [];

for (let il = 1; il <= linha; il++) {
  matriz[il] = [];
  for (let cl = 1; cl <= coluna; cl++) {
    matriz[il][cl] = Number(
      PROMPT(`Digite os valores da matriz | M[${il}] [$${cl}]: `),
    );
  }
}

const c = [];

for (let il = 1; il <= linha; il++) {
  let contador = 0;
  for (let cl = 1; cl <= coluna; cl++) {
    if (matriz[il][cl] < 0) {
      contador++;
    }
  }
  c[il] = contador;
}

for (let il = 1; il <= linha; il++) {
  console.log(`c[${il}] = ${c[il]} negativos`);
}

/* 17. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade. */
let pessoa = {
  nome: "Rafael",
  idade: 36,
};

console.log(pessoa.idade);

pessoa.email = "rafael@gmail.com";
console.log(pessoa);

/*18. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays. */
let dados = {
  numeros: (1, 3, 6, 9, 9),
  animais: ["gato", "sapo"],
  strings: "aleatório",
  arrays: ["a", "b", "c"],
};

function puxaArrays(object) {
  let apenasArrays = {};

  for (let propriedade in object) {
    if (Array.isArray(object[propriedade])) {
      apenasArrays[propriedade] = object[propriedade];
    }
  }
  return apenasArrays;
}

let teste = puxaArrays(dados);
console.log(teste);

/* 19. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm
precedência sobre as do obj1 em caso de conflitos. */
let obj1 = {
  animal: "gato",
  nome: "pumba",
};

let obj2 = {
  nome: "grampola",
};

function objetoNovo(obj1, obj2) {
  let obj3 = {};

  for (let prop in obj1) {
    obj3[prop] = obj1[prop];
  }

  for (let prop in obj2) {
    obj3[prop] = obj2[prop];
  }

  return obj3;
}

let sera = objetoNovo(obj1, obj2);
console.log(sera);

/* 20. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array. */
let aleatorios = ["sapo", "gato", "cachorro", "passaro", "gato", "macaco"];
let organizacao = {};

for (let prop = 0; prop < aleatorios.length; prop++) {
  let animal = aleatorios[prop];

  if (organizacao[animal]) {
    organizacao[animal]++;
  } else {
    organizacao[animal] = 1;
  }
}
console.table(organizacao);

/* 21. Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor. */
let vendas = [
  {
    vendedor: "joao",
    valor: 50,
  },
  {
    vendedor: "maria",
    valor: 150,
  },
  {
    vendedor: "ana",
    valor: 500,
  },
  {
    vendedor: "maria",
    valor: 500,
  },
];

function totalVendas() {
  let relatorioVendas = {};

  for (let props = 0; props < vendas.length; props++) {
    let vendedor = vendas[props].vendedor;
    let vendasVend = vendas[props].valor;

    if (relatorioVendas[vendedor]) {
      relatorioVendas[vendedor] += vendasVend;
    } else {
      relatorioVendas[vendedor] = vendasVend;
    }
  }

  return relatorioVendas;
}

console.log(totalVendas());

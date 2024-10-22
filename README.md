# Trabalho Da faculdade -  Linguagem de Programação para Web I
Parte 1: elabore uma pesquisa sobre:

A) Assincronismo. Breve definição e pequenos trechos de código para exemplificar.

1) AJAX (Asynchronous Javascript And XML)

2) promises

3) fetch API

4) Async / Await

5) Quais vantagens/desvantagens de usar cada uma das opções acima?

B) outros tópicos

1) Hoisting

2) Arrow Functions (especialmente diferenças com relação as funções normais)

3) Desestruturação (Destructuring)

4) Closure

Parte 2: Elabore um formulário que exiba os dados de um dado CEP recuperado usando a API do site ViaCep (https://viacep.com.br/) usando

a) AJAX (XMLHttpRequest) - pode usar o código disponibilizadao logo abaixo no arquivo consultacep.html

b) Fetch API

c) Async/Await

No caso da consulta ao CEP pode fazer uma página onde informa o CEP e tem três botões, cada botão usar uma forma diferente de fazer a consulta a API do Viacep.
[https://busca-cep-beryl.vercel.app/](https://busca-cep-beryl.vercel.app/)
 


# Pesquisa
Pesquisa pedida pelo professor Araya  da matéria Linguagem de Programação para Web I sobre alguns tópicos de Programação


## AJAX (Asynchronous Javascript And XML)
AJAX (JavaScript Assíncrono + XML) é um termo criado por Jesse James Garrett em 2005 para descrever uma técnica que combina várias tecnologias, como HTML, CSS, JavaScript, DOM, e principalmente o objeto XMLHttpRequest. Essa combinação permite que aplicações web façam atualizações rápidas na interface do usuário sem precisar recarregar a página inteira, tornando-as mais rápidas e responsivas.

Apesar do "X" em AJAX se referir a XML, atualmente o JSON é mais usado por ser mais leve e integrado ao JavaScript. Ambos, JSON e XML, podem ser utilizados para troca de dados no modelo AJAX.

Vantagens
1) Aumento na velocidade do site:
- Economia de banda do servidor ao buscar apenas dados do servidor, atualizando somente a parte específica do site
2) Melhor experiência do usuário:
- O AJAX explora bem os recursos utilizados pelo browser, visto que JS é uma linguagem client-side
3) Flexibilidade para a escolha da linguagem server-side
- Com o AJAX, há liberdade para escolher a tecnologia a ser utilizada como regra de negócios do projeto usando-a, como exemplo, para manipulação de banco de dados (usando Java ou php) para entregar os dados a serem tratados pelo JavaScript

Desvantagens
1) Utilização de um framework as vezes impossibilita a utilização de outro
- A incompatibilidade de frameworks distintos pode causar conflito, como por exemplo, usar JQuery como um, que utiliza o símbolo cifrão para a manipulação do DOM, que a prototype também usa, tem como contornar, mas vira uma “gambiarra”.
2) Botão de avançar e voltar do navegador
- Ao serem pressionados, no site, irá ser apresentado a página visitada anteriormente, não o conteúdo visto.
- ⁠Isso pode ser contornado, utilizando algumas ferramentas do framework para salvar o “momento “ no histórico.
3) Má implementação do AJAX
- Como dito anteriormente, pode ocorrer conflito entre frameworks, isso se concretiza pela má implementação do AJAX, que, se utilizado de maneira incorreta, pode causar outros problemas, como o impedimento do funcionamento do AJAX
## Promisses
Uma Promise é um proxy para um valor não necessariamente conhecido quando a promise é criada. Ele permite que você associe manipuladores ao valor de sucesso ou motivo de falha de uma ação assíncrona. Isso permite que métodos assíncronos retornem valores como métodos síncronos: em vez de retornar imediatamente o valor final, o método assíncrono retorna uma promise para fornecer o valor em algum momento no futuro.
Uma Promise está em um destes estados:
- Pending: estado inicial, nem cumprido nem rejeitado.
- Fulfilled:  significa que a operação foi concluída com sucesso.
- Rejected: significa que a operação falhou.

O estado eventual de uma promise pendente pode ser *fulfilled* com um valor ou *rejected* com um motivo (erro). Quando uma dessas opções ocorre, os manipuladores associados enfileirados pelo método *then* de uma promise são chamados. Se a promise já tiver sido cumprida ou rejeitada quando um manipulador correspondente for anexado, o manipulador será chamado, portanto, não há condição de corrida entre a conclusão de uma operação assíncrona e a anexação de seus manipuladores.

Uma promise é considerada resolvida se for cumprida ou rejeitada, mas não pendente.
exemplo:
````
// Criação de promessa
const myPromise = new Promise((resolve, reject) => {
    const nome = 'ana'

    if(nome === 'ana'){
        resolve('Usuário Ana encontrada!')
    } else {
        reject('O usuário Ana não foi encontrada!')
    }
})

myPromise.then((data) => {
    console.log(data)
})
````
#### Vantagens:
- Gerenciamento de Fluxo Assíncrono:Permitem manejar operações assíncronas de forma mais clara e organizada em comparação com callbacks aninhados (callback hell)
- Integração com Async/Await:Promessas podem ser usadas em conjunto com async e await, que simplificam ainda mais a escrita de código assíncrono em um estilo semelhante ao código síncrono
- Encadeamento: Permitem encadear várias operações assíncronas usando .then(), facilitando a leitura e compreensão do código.

#### Desvantagens:
- Problemas de Sincronização: Embora as promessas tratem de operações assíncronas, não garantem a ordem de execução. Isso pode ocasionar problemas se não forem gerenciadas corretamente.
- Consumir Recursos:  criação de múltiplas promessas e o gerenciamento de suas resoluções podem resultar em um uso excessivo de memória, em casos de promessas não gerenciadas
- Comportamento não esperado: Se uma promessa for resolvida ou rejeitada em um contexto onde não se espera, pode causar comportamento inesperado, especialmente se não houver tratamento adequado de erros.


## Async / Await
async e await são palavras-chave que simplificam o trabalho com Promises, tornando o código assíncrono mais legível e semelhante ao código síncrono.

- async: Declara uma função assíncrona. Sempre retorna uma Promise.

- await: Utilizado dentro de funções async para esperar a resolução de uma Promise antes de prosseguir.

Para declarar uma função assíncrona, basta adicionar a palavra-chave async antes da declaração da função:
````
async function minhaFuncao() {
  return 'Hello, World!';
}

// Equivalente a:
function minhaFuncao() {
  return Promise.resolve('Hello, World!');
}
````
Utilizando await
Dentro de uma função async, você pode usar await para pausar a execução até que uma Promise seja resolvida:

```` 
async function obterDados() {
  const resposta = await fetch('https://api.exemplo.com/dados');
  const dados = await resposta.json();
  return dados;
}

obterDados().then(dados => console.log(dados));
````
#### Vantagens:

- Legibilidade: O código com async/await é mais linear e fácil de entender.
- Manutenção: Facilita a escrita e manutenção de código assíncrono complexo.
- Melhor Estrutura do Fluxo de Controle:  controle de fluxo se torna mais linear, o que facilita o rastreamento da lógica do programa e a manutenção do código

#### Desvantagens:
- Ambiente de Suporte: É necessário que o ambiente suporte async/await. Para ambientes mais antigos, pode ser necessário transpilar o código ou usar polifills para garantir compatibilidade.
- Implica em Promessas: Ao usar async/await, você ainda deve entender as promessas, pois await só pode ser utilizado em funções async, e ambos são baseados no mesmo conceito de promessas.
- Complexidade em Cancelamentos:  Cancelar uma operação assíncrona pode ser mais complicado quando se utiliza a abordagem async/await, sendo que as promessas precisam de um manejo específico para isso.

## fetch API
loremdaldkmdkjncjacnjkaxncc

## Hoisting
Quando o Javascript compila todo seu código, todas as declarações de variaveis usando *var* são levadas ao topo de suas funções/escopo local(se declaradas dentro de uma função), ou ao topo do escopo global (se declaradas fora de uma função) independentemente de onde a declaração foi feita. Se escrevermos o seguinte código:
```` 
console.log(myName);
var myName= 'Alecs'; 
````
o console irá mostrar *undefined*, pois como foi falado, as variaveis são movidas pro topo de seus escopos quando o Javascript compila o código. É importante notar que a única coisa que é movida para o topo são as declarações de varaveis, não o valor real delas. Basicamente depois da compilção, o código fica assim:
```` 
var myName;
console.log(myName);
myName= Alecs;
```` 
Por isso que o console devolve *undefined*, pois ele reconhece que a variável *myName* existe, porém ela não teve um valor inserido até a terceira linha.
## Arrow Functions (especialmente diferenças com relação as funções normais)
A Arrow Function é uma maneira mais curta de escrever funções e tem uma sintaxe mais concisa tendo
uma estrutura mais compacta, sem necessariamente usar a palavra-chave "return", como no 
exemplo a baixo, comparando as 2 formas:

Função tradicional:

function soma(a, b) {
  return a + b;
}


Com arrow function:

const soma = (a, b) => a + b;


Note que à cima temos o retorno implícito porque há apenas uma expressão, 
então não precisamos usar "return" ou chaves "{ }".

Uma grande diferença das arrow functions é como elas lidam com o "this". Em uma função tradicional,
o valor de "this" pode mudar dependendo de onde a função é chamada. Nas "arrow functions", o valor 
de "this" é "herdado" do contexto onde a função foi definida.

Exemplo da diferença de "this":

Função tradicional:

````
function Pessoa() {
  this.idade = 0;

  setInterval(function() {
    _this.idade++;  // Aqui this se refere ao contexto global_
    console.log(this.idade);
  }, 1000);
}

new Pessoa();
````

Com arrow function:
````
function Pessoa( ) {
  this.idade = 0;

  setInterval(( ) => {
    this.idade++;  // Aqui this se refere ao objeto Pessoa
    console.log(this.idade);
  }, 1000);
}

	new Pessoa();
````

Nesse exemplo, a arrow function mantém o valor correto de this, referindo-se ao objeto Pessoa.

 Concluindo, as arrow functions oferecem uma sintaxe mais enxuta e simplificam o uso de this, especialmente em callbacks 
e funções anônimas. No entanto, elas não devem ser usadas em todos os casos, como em métodos de objetos 
que dependem de um this dinâmico.

##  Desestruturação Arrays(Destructuring)

Retirar um ou mais valores de uma array ou propriedades de objetos em variáveis distintas, ou seja, extrair dados dos arrays e dos objetos e atribui-los às variáveis

Exemplo:
````
let apresentacao = ["Olá", "eu" , "sou", "a", "Sarah"];
let saudacao = apresentacao[0];
let nome = apresentacao[4];

console.log(saudacao);//"Olá"
console.log(nome);//"Sarah"
````
Ao extrair dados de uma array, deve-se fazer o mesmo rapidamente

Também podemos fazer o seguinte com o mesmo resultado:

Exemplo:
````
let [saudacao, pronome] = ["Olá", "eu", "sou", "a", "Sarah"];
console.log(saudacao);//"Olá"
console.log(pronome);//"eu"
````
Pode-se, também, declarar variáveis antes mesmo de serem atribuidas:
Exemplo:
````
let saudacao, pronome;
[saudacao, pronome] = ["Olá", "eu" , "sou", "a", "Sarah"];
console.log(saudacao);//"Olá"
console.log(pronome);//"eu"
````
OBS: as variáveis são definidas da esquerda para direita, sendo a primeira variável recebendo o primeiro item da array, a segunda variável recebendo o segundo item da array, e assim por diante. 

Há também casos que pode pular os itens da array:
Exemplo:
````
let [saudacao,,,,nome] = ["Olá", "eu" , "sou", "a", "Sarah"];
console.log(saudacao);//"Olá"
console.log(nome);//"Sarah"
````
-=-=-Pegando o primeiro e o último item da array, usando as vírgulas, sem nada entre elas, para pular os itens.
Atribuição de resto de uma array: 
````
let [saudacao,...apresentacao] = ["Olá", "eu" , "sou", "a", "Sarah"];

console.log(saudacao);//"Olá"
console.log(apresentacao);//["eu", "sou", "a", "Sarah"]
````
Nesse caso, os três pontos são indicativos onde essa parte final do array conta como somente uma variável (apresentacao)
##  Closure
Closure é quando uma função é capaz de "lembrar" e acessar seu escopo léxico mesmo quando ela está sendo executada fora de seu escopo léxico. Em termos simples, uma closure permite que uma função acesse variáveis externas mesmo após a função externa ter sido executada

#### Como funciona as closures
Para entender como closures funcionam, é importante compreender escopo léxico e escopo de funções em JavaScript.

Escopo Léxico:
O escopo léxico refere-se à estrutura de código onde o escopo de uma variável é definido no momento da escrita do código, não na execução.

Funcionamento das Closures:
Quando uma função é definida dentro de outra função, a função interna tem acesso às variáveis da função externa. Mesmo que a função externa termine sua execução, a função interna ainda pode acessar essas variáveis graças às closures.
````
function externa() {
  const mensagem = 'Olá, Mundo!';

  function interna() {
    console.log(mensagem);
  }

  return interna;
}

const minhaClosure = externa();
minhaClosure(); // Saída: "Olá, Mundo!"
````
A função *externa* define uma variável *mensagem* e uma função interna que acessa *mensagem*.
*externa* retorna a função *interna*.
Mesmo após a execução de *externa*, a função *minhaClosure* (que é *interna*) ainda consegue acessar *mensagem* devido à closure.

## Autores

- Alecsndro Sales - hoisting e closure
- Ana Clara Soares - Promises
- Arthur Santps Marques - Arrow Functions
- Luis Filipe - Desestruturação  e AJAX
- Murilo de Oliveira Pinho - Async / await
- Jhonatan Natanel - Fetch api




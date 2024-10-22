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

Pesquisa pedida pelo professor Araya da matéria Linguagem de Programação para Web I sobre alguns tópicos de Programação

## AJAX (Asynchronous Javascript And XML)

## Promisses

Uma Promise é um proxy para um valor não necessariamente conhecido quando a promise é criada. Ele permite que você associe manipuladores ao valor de sucesso ou motivo de falha de uma ação assíncrona. Isso permite que métodos assíncronos retornem valores como métodos síncronos: em vez de retornar imediatamente o valor final, o método assíncrono retorna uma promise para fornecer o valor em algum momento no futuro.
Uma Promise está em um destes estados:

- Pending: estado inicial, nem cumprido nem rejeitado.
- Fulfilled: significa que a operação foi concluída com sucesso.
- Rejected: significa que a operação falhou.

O estado eventual de uma promise pendente pode ser _fulfilled_ com um valor ou _rejected_ com um motivo (erro). Quando uma dessas opções ocorre, os manipuladores associados enfileirados pelo método _then_ de uma promise são chamados. Se a promise já tiver sido cumprida ou rejeitada quando um manipulador correspondente for anexado, o manipulador será chamado, portanto, não há condição de corrida entre a conclusão de uma operação assíncrona e a anexação de seus manipuladores.

Uma promise é considerada resolvida se for cumprida ou rejeitada, mas não pendente.
exemplo:

```
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
```

#### Vantagens:

- Gerenciamento de Fluxo Assíncrono:Permitem manejar operações assíncronas de forma mais clara e organizada em comparação com callbacks aninhados (callback hell)
- Integração com Async/Await:Promessas podem ser usadas em conjunto com async e await, que simplificam ainda mais a escrita de código assíncrono em um estilo semelhante ao código síncrono
- Encadeamento: Permitem encadear várias operações assíncronas usando .then(), facilitando a leitura e compreensão do código.

#### Desvantagens:

- Problemas de Sincronização: Embora as promessas tratem de operações assíncronas, não garantem a ordem de execução. Isso pode ocasionar problemas se não forem gerenciadas corretamente.
- Consumir Recursos: criação de múltiplas promessas e o gerenciamento de suas resoluções podem resultar em um uso excessivo de memória, em casos de promessas não gerenciadas
- Comportamento não esperado: Se uma promessa for resolvida ou rejeitada em um contexto onde não se espera, pode causar comportamento inesperado, especialmente se não houver tratamento adequado de erros.

## Async / Await

async e await são palavras-chave que simplificam o trabalho com Promises, tornando o código assíncrono mais legível e semelhante ao código síncrono.

- async: Declara uma função assíncrona. Sempre retorna uma Promise.

- await: Utilizado dentro de funções async para esperar a resolução de uma Promise antes de prosseguir.

Para declarar uma função assíncrona, basta adicionar a palavra-chave async antes da declaração da função:

```
async function minhaFuncao() {
  return 'Hello, World!';
}

// Equivalente a:
function minhaFuncao() {
  return Promise.resolve('Hello, World!');
}
```

Utilizando await
Dentro de uma função async, você pode usar await para pausar a execução até que uma Promise seja resolvida:

```
async function obterDados() {
  const resposta = await fetch('https://api.exemplo.com/dados');
  const dados = await resposta.json();
  return dados;
}

obterDados().then(dados => console.log(dados));
```

#### Vantagens:

- Legibilidade: O código com async/await é mais linear e fácil de entender.
- Manutenção: Facilita a escrita e manutenção de código assíncrono complexo.
- Melhor Estrutura do Fluxo de Controle: controle de fluxo se torna mais linear, o que facilita o rastreamento da lógica do programa e a manutenção do código

#### Desvantagens:

- Ambiente de Suporte: É necessário que o ambiente suporte async/await. Para ambientes mais antigos, pode ser necessário transpilar o código ou usar polifills para garantir compatibilidade.
- Implica em Promessas: Ao usar async/await, você ainda deve entender as promessas, pois await só pode ser utilizado em funções async, e ambos são baseados no mesmo conceito de promessas.
- Complexidade em Cancelamentos: Cancelar uma operação assíncrona pode ser mais complicado quando se utiliza a abordagem async/await, sendo que as promessas precisam de um manejo específico para isso.

## fetch API

loremdaldkmdkjncjacnjkaxncc

## Hoisting

Quando o Javascript compila todo seu código, todas as declarações de variaveis usando _var_ são levadas ao topo de suas funções/escopo local(se declaradas dentro de uma função), ou ao topo do escopo global (se declaradas fora de uma função) independentemente de onde a declaração foi feita. Se escrevermos o seguinte código:

```
console.log(myName);
var myName= 'Alecs';
```

o console irá mostrar _undefined_, pois como foi falado, as variaveis são movidas pro topo de seus escopos quando o Javascript compila o código. É importante notar que a única coisa que é movida para o topo são as declarações de varaveis, não o valor real delas. Basicamente depois da compilção, o código fica assim:

```
var myName;
console.log(myName);
myName= Alecs;
```

Por isso que o console devolve _undefined_, pois ele reconhece que a variável _myName_ existe, porém ela não teve um valor inserido até a terceira linha.

## Arrow Functions (especialmente diferenças com relação as funções normais)

loremdaldkmdkjncjacnjkaxncc

## Desestruturação (Destructuring)

loremdaldkmdkjncjacnjkaxncc

## Closure

Closure é quando uma função é capaz de "lembrar" e acessar seu escopo léxico mesmo quando ela está sendo executada fora de seu escopo léxico. Em termos simples, uma closure permite que uma função acesse variáveis externas mesmo após a função externa ter sido executada

#### Como funciona as closures

Para entender como closures funcionam, é importante compreender escopo léxico e escopo de funções em JavaScript.

Escopo Léxico:
O escopo léxico refere-se à estrutura de código onde o escopo de uma variável é definido no momento da escrita do código, não na execução.

Funcionamento das Closures:
Quando uma função é definida dentro de outra função, a função interna tem acesso às variáveis da função externa. Mesmo que a função externa termine sua execução, a função interna ainda pode acessar essas variáveis graças às closures.

```
function externa() {
  const mensagem = 'Olá, Mundo!';

  function interna() {
    console.log(mensagem);
  }

  return interna;
}

const minhaClosure = externa();
minhaClosure(); // Saída: "Olá, Mundo!"
```

A função _externa_ define uma variável _mensagem_ e uma função interna que acessa _mensagem_.
_externa_ retorna a função _interna_.
Mesmo após a execução de _externa_, a função _minhaClosure_ (que é _interna_) ainda consegue acessar _mensagem_ devido à closure.

## Pesquisa feita pelos alunos

- Alecsndro Sales - hoisting e closure
- Ana Clara Soares - Promises
- Arthur Santps Marques - Arrow Functions
- Luis Filipe - Desestruturação e AJAX
- Murilo de Oliveira Pinho - Async / await
- Jhonatan Natanel - Fetch api


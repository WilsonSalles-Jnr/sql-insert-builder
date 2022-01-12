# sql-insert-builder
O objetivo deste projeto, é gerar um arquivo sql contendo todos os insert, com os dados copiados de uma tabela e colados em uma unica string literal

## Como usar
- Crie um arquivo js e faça uma require do arquivo <code>build-insert.js</code>
``` javascript
const builder = require('./build-insert');
```
- <code>build-insert.js</code> recebe 2 parâmetros, sendo o primeiro um string literal contendo a tabela que você quer transformar em uma insert, o segundo parâmetro é o caminho e nome do arquivo sql que você quer inserir os dados da tabela, lembrando que, não é necessário inserir o ".sql" no final da string.
``` javascript
const builder = require('.build-insert');

builder(`1	nome aleatório a	23	1	2019-10-20`, "./novo_arquivo");
```
- Rode o comando <code>node {nome do seu arquivo}</code>, ele irá gerar ou inserir o conteúdo "convertido", com o exemplo acima, irá retornar um arquivo sql com o seguinte conteúdo:
```
("1", "nome aleatório a", "23", "1", "2019-10-20");
```
- Uma boa prática, é armazenar em uma variavel a tabela a ser convertida usando string literal:
``` javascript
const builder = require('.build-insert');

const TABELA =
`1	nome aleatório a	23	1	2019-10-20
2	nome aleatório b	35	3	2017-12-30
3	nome aleatório c	20	4	2019-06-05
4	nome aleatório d	45	2	2020-05-13
5	nome aleatório e	58	2	2017-02-17`

builder(TABELA, "./novo_arquivo");
```

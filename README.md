# Teste Angular
## Descrição do Projeto
Desafio para elaborar uma página em html, js e CSS usando as bibliotecas: Angular 7+ e Bootstrap 4. A tela será dívida em duas partes, na parte de cima deve ter um gráfico e na parte 
baixo uma tabela acionada de forma dinâmica usando Angular 7+.


## Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#Sobre)
   * [Tabela de Conteudo](#tabela-de-conteudo)
   * [Status do Projeto](#status-do-projeto)
   * [Instalação](#instalacao)
   * [Como usar](#como-usar)
   * [Massa de dados](#massa-de-dados)
<!--te-->
=================

## Sobre
Solução implementada em C# Asp.NET Core e Angular 8. Para fonte de dados foi utilizada a base de pokémons da primeira geração.
- Gráfico de pizza/pie-chart implementado com Chart.js e ng2-chart. Exibe a quantidade de pokémons por tipo.
- Tabela implemetando com Angular Material (com ordenação e paginação) e consumo de dados através de arquivo json. Exibe a lista de pokémons com id, nome e tipo.
- Cabeçalho e rodapé com ToolBar do Angular Material. Exibe o logo "pokedex" e um link para a home.

## Status do Projeto
Disponível para avaliação técnica.

## Instalação
Clonar este repositório e a abrir a solution pelo Visual Studio (no projeto foi utilizado a versão 2019). 

## Como Usar
Iniciar a aplicação através do IIS Express e todas as dpendências serão baixadas e instaladas. A página com o teste será aberta no navegador padrão.

### Massa de dados
Através do <a href="https://github.com/diegormorais/teste-angular/blob/a5221de91ee0fa67f5bc64cfef08fb25d05076de/AngularTeste/ClientApp/src/app/data/db.json">db.json</a> foi gerada a lista de todos os pokémons da primeira geração. Apenas os atributos 'id', 'name' e 'type' foram utilizados.

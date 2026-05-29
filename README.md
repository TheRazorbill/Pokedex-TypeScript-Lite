# Pokedex TypeScript Lite

## Sobre o projeto

O Pokedexx TypeScript Lite é uma aplicacao desenvolvida em Node.js com TypeScript que realiza a consulta de dados de Pokemon atraves da PokeAPI e gerencia um catalogo local durante a execucao do sistema.

## Objetivo

O objetivo deste projeto e aplicar os conceitos fundamentais do Modulo 01, abrangendo a comunicacao assincrona, persistencia em memoria, tipagem estrita com TypeScript e organizacao arquitetural em camadas.

## Tecnologias utilizadas

- Node.js
- TypeScript
- TSX
- PokeAPI
- Git
- GitHub

## Pre-requisitos

Para executar este projeto, e necessario possuir instalado:

- Node.js
- npm
- Git

## Como instalar

1. Clone o repositorio:
   git clone https://github.com/TheRazorbill/Pokdex-TypeScript-Lite

2. Acesse a pasta do projeto:
   cd pokedex-typescript-lite

3. Instale as dependencias:
   npm install

## Como executar

Para iniciar a aplicacao em ambiente de desenvolvimento:
npm run dev

## Estrutura do projeto

pokedex-typescript-lite/
├── src/
│ ├── controllers/
│ ├── models/
│ ├── services/
│ ├── utils/
│ └── main.ts
├── package.json
├── tsconfig.json
└── README.md

## Funcionalidades

- Busca de Pokemon por nome ou ID via API
- Mapeamento de dados da API para interface simplificada
- Adicao de Pokemon ao catalogo local
- Validacao de duplicidade por ID
- Listagem do catalogo
- Remocao de Pokemon do catalogo por ID
- Tratamento de erros de requisicao

## Exemplos de execucao

### Busca valida

Entrada: pikachu
Saida:
[OK] Pokemon encontrado: pikachu
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60

### Busca invalida

Entrada: pokemon-inexistente
Saida:
[ERRO] Pokemon nao encontrado.

### Duplicidade

Entrada: adicionar pikachu duas vezes
Saida:
[AVISO] pikachu ja esta no catalogo.

### Remocao

Entrada: remover ID 25
Saida:
[OK] Pokemon removido do catalogo.

## Conceitos aplicados

- TypeScript: Uso de interfaces e tipagem de parametros e retornos.
- Fetch e Async/Await: Consumo da API de forma assincrona.
- Tratamento de erros: Implementacao de blocos try/catch.
- Metodos de array: Utilizacao de filter, some, map e forEach.
- Programacao Orientada a Objetos: Implementacao da classe CatalogoPokemon.

## Organizacao do Kanban

Link do Kanban: nao esquecer do link 🙏

## Branches utilizadas

- main
- develop
- feat/pokedex
- docs/readme

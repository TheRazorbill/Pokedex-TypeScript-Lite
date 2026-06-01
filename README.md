# Pokédex TypeScript Lite

## Sobre o projeto

O Pokédex TypeScript Lite é uma aplicação desenvolvida em Node.js com TypeScript que realiza a consulta de dados de Pokémon através da PokeAPI e gerencia um catálogo local durante a execução do sistema.

## Objetivo

O objetivo deste projeto é aplicar os conceitos fundamentais do Módulo 01, abrangendo a comunicação assíncrona, persistência em memória, tipagem estrita com TypeScript e organização arquitetural em camadas.

## Tecnologias utilizadas

- Node.js
- TypeScript
- TSX
- PokeAPI
- Git
- GitHub

## Pré-requisitos

Para executar este projeto, é necessário possuir instalado:

- Node.js
- npm
- Git

## Como instalar

1. Clone o repositório:
   ```bash
   git clone https://github.com/TheRazorbill/Pok-dex-TypeScript-Lite.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd Pok-dex-TypeScript-Lite
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## Como executar e scripts disponíveis

No projeto, os seguintes scripts estão configurados no `package.json`:

### Desenvolvimento
Para iniciar a aplicação diretamente a partir dos arquivos TypeScript (usando `tsx`):
```bash
npm run dev
```

### Produção / Compilação
1. **Compilar o projeto**: Converte os arquivos TypeScript para JavaScript na pasta `dist/` (sem gerar arquivos de definição ou mapas desnecessários):
   ```bash
   npm run build
   ```

2. **Iniciar o código compilado**: Executa os arquivos JavaScript compilados na pasta `dist/`:
   ```bash
   npm start
   ```

### Teste de Build Completo
Para validar se a compilação ocorre sem erros e rodar o executável gerado:
```bash
npm test
```

## Estrutura do projeto

```
Pok-dex-TypeScript-Lite/
├── src/
│   ├── controllers/
│   │   └── terminalController.ts
│   ├── models/
│   │   ├── customErrors.ts
│   │   └── pokemon.ts
│   ├── services/
│   │   ├── boxService.ts
│   │   └── pokeApiService.ts
│   ├── utils/
│   │   └── textFormatters.ts
│   └── main.ts
├── .gitignore
├── package.json
├── package-lock.json
├── pc_box.json
├── tsconfig.json
└── README.md
```

## Funcionalidades

- Busca de Pokémon por nome ou ID via API externa (PokeAPI)
- Mapeamento e tipagem dos dados da API para uma interface simplificada
- Adição de Pokémon ao catálogo local em memória
- Validação de duplicidade por ID no catálogo
- Listagem formatada do catálogo em formato de tabela no terminal
- Remoção de Pokémon do catálogo por ID com tratamento de erros
- Tratamento de erros personalizado para requisições da API e operações locais

## Exemplos de execução

### Busca de Pokémon existente e adição ao catálogo
Saída no terminal:
```text
[OK] Pokémon encontrado: Pikachu
#25 Pikachu | Tipos: electric | Altura: 4 | Peso: 60
[OK] Pikachu adicionado ao catálogo.
```

### Tentativa de adição duplicada
Saída no terminal:
```text
[AVISO] Pikachu já está no catálogo.
```

### Busca de Pokémon inexistente
Saída no terminal:
```text
[ERRO] Pokémon não encontrado.
```

### Listagem do catálogo
Saída no terminal:
```text
─────────────────────────────────────────────────────
ID     Nome         Tipos              Altura   Peso
─────────────────────────────────────────────────────
#25    Pikachu      electric                4     60
#4     Charmander   fire                    6     85
─────────────────────────────────────────────────────
```

### Remoção de Pokémon do catálogo por ID
Saída no terminal:
```text
[OK] Pokémon removido do catálogo com sucesso.
```

## Conceitos aplicados

- TypeScript: Uso de interfaces, tipos personalizados e tipagem estrita de parâmetros e retornos.
- Fetch e Async/Await: Consumo assíncrono da API externa PokeAPI.
- Tratamento de erros: Implementação de classes de erro customizadas (APIError, LocalBoxError) e blocos try/catch para controle de fluxo robusto.
- Métodos de manipulação de arrays: Utilização de map, filter, some e forEach para manipulação de listas.
- Programação Orientada a Objetos (POO): Estruturação da lógica através de classes e métodos estáticos.

## Organização do Kanban

O planejamento das atividades e o controle do fluxo de trabalho deste projeto são realizados por meio de um quadro Kanban de desenvolvimento.
- Link do Kanban: [Quadro Kanban do Projeto](https://github.com/users/TheRazorbill/projects/3/views/1)

## Branches utilizadas

- main
- develop
- feat/api-pokemon
- docs/readme

# ![Hairday](./src/assets/scissors.svg) HairDay App

Sistema de agendamento de horários para salões de beleza.

## Sobre o Projeto

HairDay é uma aplicação web que permite gerenciar agendamentos de um salão de beleza, oferecendo uma interface intuitiva para clientes e profissionais, desenvolvido com JavaScript vanilla e uma API REST de exemplo.

## Tecnologias

- JavaScript
- HTML & CSS
- Day.js
- JSON Server
- Webpack

## Pré-requisitos

- Node.js
- NPM, PNPM ou Yarn

## Instalação

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/hairday-app.git
cd hairday-app
```

2. Instale as dependências

```bash
npm install
```

3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

4. Em outro terminal, inicie o JSON Server

```bash
npm start
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm start` - Inicia o JSON Server na porta 3333
- `npm run build` - Gera build de produção

## Funcionalidades

- Agendamento de horários
- Visualização de horários disponíveis
- Cancelamento de agendamentos
- Validação de disponibilidade
- Organização por períodos (manhã, tarde, noite)

## Endpoints da API

- `GET /schedules` - Lista todos os agendamentos
- `POST /schedules` - Cria um novo agendamento
- `DELETE /schedules/:id` - Cancela um agendamento

##

Projeto desenvolvido durante o curso de desenvolvimento web da Rocketseat 🚀.

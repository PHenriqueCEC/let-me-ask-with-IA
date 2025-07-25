# 💻Sobre o projeto
Neste projeto o usuário pode entrar em uma sala para fazer perguntas, seja por áudio ou texto. Em seguida, a pergunta é processada por meio de uma integração com o Gemini, que gera uma resposta de forma instantânea


# 🚀 Instruções para Executar o Projeto

  

Certifique-se de que sua máquina atenda aos requisitos abaixo antes de iniciar o projeto:

  

- [Node.js](https://nodejs.org/) **(versão 22 utilizada neste projeto)**

- [npm](https://www.npmjs.com/)
- [docker](https://www.docker.com/)

  


## 🛠 Tecnologias Utilizadas

<img src="https://nodejs.org/static/images/logo.svg" alt="Node.js" width="40" title="Node.js"/>  <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="TypeScript" width="40" title="TypeScript"/> <img src="https://miro.medium.com/v2/resize:fit:336/0*rmv6pZTW2hfP2XYd.png" alt="Docker" width="40" title="Docker"/>  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React" width="40" title="React"/> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/1200px-Google_Gemini_logo.svg.png" alt="Gemini" width="40" title="Gemini"/> 

  

1.  **Clone o repositório (caso ainda não tenha feito isso):**

```bash

git clone https://github.com/PHenriqueCEC/let-me-ask-with-IA.git

cd let-me-ask-with-IA

```

  

2.  **Instale as dependências do projeto:**

```bash
cd backend/ && cd frontend/web
npm install

```

  

3.  **Inicialize o docker**

```bash

docker compose up -d

```

  

4.  **Inicialize a aplicação**

> Tanto nos diretórios backend quanto no frontend

```bash

npm run start

```

 
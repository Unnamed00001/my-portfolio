# QR Code & Password Generator

### 📌 Descrição 

Este projeto é uma aplicação simples em Node.js que permite ao usuário, através de um menu no terminal, escolher entre duas funcionalidades:

* Gerar QR Code: transforma um texto ou link em um QR Code.

* Gerar Senha Segura: cria senhas fortes de forma automática e aleatória.

O sistema utiliza o pacote prompt para interagir com o usuário diretamente no terminal.

### 🚀 Funcionalidades

✅ Menu interativo no terminal\
✅ Geração de QR Codes a partir de texto ou links\
✅ Criação de senhas seguras e aleatórias\
✅ Código modular e organizado em serviços separados

### 🛠️ Tecnologias Utilizadas

* Node.js
* prompt
* chalk
* qrcode-terminal



### 📂 Estrutura do Projeto
| Pasta / Arquivo                | Descrição                                  |
|--------------------------------|---------------------------------------------|
| 📂 src                         | Código-fonte principal do projeto           |
| ┣ 📂 prompts                   | Contém os prompts usados no terminal        |
| ┃ ┣ 📜 prompts-main.js         | Menu principal                             |
| ┃ ┗ 📜 prompts-qrcode.js       | Prompt específico para gerar QR Code        |
| ┣ 📂 services                  | Serviços principais do sistema              |
| ┃ ┣ 📂 password                | Módulo de geração de senhas                 |
| ┃ ┃ ┣ 📂 utils                 | Utilitários para senhas                     |
| ┃ ┃ ┃ ┗ 📜 permitted-characters.js | Conjunto de caracteres permitidos      |
| ┃ ┃ ┣ 📜 create.js             | Criação de senhas                           |
| ┃ ┃ ┗ 📜 handle.js             | Manipulação e lógica de senhas              |
| ┃ ┣ 📂 qr-code                 | Módulo de geração de QR Codes               |
| ┃ ┃ ┣ 📜 create.js             | Criação de QR Codes                         |
| ┃ ┃ ┗ 📜 handle.js             | Manipulação e lógica de QR Codes            |
| ┃ ┗ 📜 index.js                | Arquivo inicial dos serviços                |
| 📜 .env                        | Variáveis de ambiente                       |
| 📜 .gitignore                  | Ignora arquivos/pastas no Git               |
| 📜 package.json                | Dependências e scripts do projeto           |
| 📜 package-lock.json           | Versões exatas das dependências             |
| 📜 README.md                   | Documentação do projeto                     |

### ▶️ Como Executar

* 1 -  Clone este repositório:
```
git clone https://github.com/Unnamed00001/Portfolio/tree/08ec2546624a22cb076b748aec6f39a70b3c632d/project-qrcode

```

* 2 - Instale as dependências:
```
npm install
```

* 3 - Execute o projeto:
```
node --env-file=.env src/index.js
```
### 📖 Exemplo de Uso

Ao rodar o projeto, será exibido um menu no terminal:

```
prompt: Escolha a ferramenta [ 1 ] - QRCODE ou [ 2 ] - PASSWORD:

```

* Se o usuário digitar 1, será solicitado um texto/link e o QR Code será criado.
* Se digitar 2, o sistema gera uma senha forte automaticamente.

### 📌 Melhorias Futuras

* Adicionar mais opções de personalização de QR Code

* Permitir escolher o tamanho e complexidade da senha

* Criar interface web simples além do terminal



# api-champios-league

API construída com **Node.js**, **TypeScript** e **Express** para gerenciamento de jogadores de futebol e clubes.

---

## 📝 Descrição

A `api-champios-league` é uma API simples que permite:  

- Listar jogadores  
- Buscar jogador por ID  
- Adicionar novos jogadores  
- Atualizar estatísticas ou informações de jogadores  
- Remover jogadores  
- Listar clubes  

Os dados dos jogadores estão armazenados em memória usando um **array `database`**, com tipagem TypeScript (`PlayerModel` e `StatisticsModel`).

---

## 🚀 Tecnologias

- Node.js  
- TypeScript  
- Express  
- Git

---

## 📁 Estrutura do Projeto

```

src/
├─ controllers/
│  ├─ players-controllers.ts
│  └─ clubs-controllers.ts
├─ data/
│  └─ clubs.json
├─ models/
│  ├─ club-model.ts
│  ├─ http-response-model.ts
│  ├─ player-model.ts
│  └─ statistics-model.ts
├─ repositores/
│  ├─ club-repositorys.ts
│  └─ player-repositorys.ts
├─ routes/
│  └─ routes.ts
├─ services/
│  ├─ club-service.ts
│  └─ player-service.ts
├─ utils/
│  └─ http-helper.ts
├─ app.ts
└─ server.ts

````

---

## ⚡ Rotas Disponíveis

### Jogadores

| Método | Rota             | Descrição                     |
|--------|-----------------|--------------------------------|
| GET    | /players        | Retorna todos os jogadores    |
| GET    | /players/:id    | Retorna um jogador pelo ID    |
| POST   | /players        | Adiciona um novo jogador      |
| PATCH  | /players/:id    | Atualiza informações do jogador |
| DELETE | /players/:id    | Remove um jogador pelo ID     |

### Clubes

| Método | Rota    | Descrição            |
|--------|--------|--------------------|
| GET    | /clubs | Retorna os clubes   |

---

## ⚙️ Como Usar

1. Clone o repositório:

```bash
git clone <repo-url>
cd api-champios-league
````

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

4. A API estará disponível em:

```
http://localhost:3000/api
```

Exemplo de rota completa: `http://localhost:3000/api/players`

---

## 💡 Observações

* A API utiliza um **banco de dados em memória**, então as alterações **não persistem** ao reiniciar o servidor.
* Ideal para aprendizado, testes ou como base para implementar um banco real (MySQL, MongoDB, etc).

---

## 🛠️ Próximos Passos

* Implementar persistência em arquivo ou banco de dados
# F1 API - Fastify

API simples para fornecer informações sobre equipes e pilotos de Fórmula 1 usando **Fastify**.

[![Node.js](https://img.shields.io/badge/node-v18.0.0-green)](https://nodejs.org/)

---

## 🚀 Tecnologias

- Node.js
- Fastify
- CORS (`@fastify/cors`)

---

## ⚡ Instalação

```bash
git clone <seu-repo-url>
cd <nome-do-repo>
npm install
npm run dev
```

Servidor rodando em 🌐 `http://localhost:4444`

---

## 📌 Endpoints

| Método  | Rota           | Descrição                       |
| ------- | -------------- | ------------------------------- |
| 🟢 GET  | `/teams`       | Lista todas as equipes          |
| 🏎️ GET | `/drivers`     | Lista todos os pilotos          |
| 🔍 GET  | `/drivers/:id` | Busca piloto específico pelo ID |

### ✨ Exemplo de resposta `/drivers/1`

```json
{
  "driver": {
    "id": 1,
    "name": "Max Verstappen",
    "team": "Red Bull Racing"
  }
}
```

---

## 💡 Observações

* 🌍 CORS habilitado para todas as origens (`*`)
* 📊 Dados de pilotos e equipes estão fixos como exemplo
* ✅ Pronto para expandir com mais endpoints e relacionamentos

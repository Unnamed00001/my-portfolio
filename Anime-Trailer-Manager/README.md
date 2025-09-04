# 🎬 Anime Trailer Manager

## 🎯 Descrição

Aplicativo focado em **trailers de animes**, organizados por categorias e com busca por nome do anime.

O backend é **Node.js + TypeScript**, fornecendo uma **API REST** que retorna trailers filtrados por nome ou categoria.

Cada trailer contém:

* Nome do anime (`animeName`)
* Título do trailer (`trailerTitle`)
* ID do vídeo (`videoId`)
* Categorias (`category`: array de strings)

---

## ⚙️ Features

* **Listar trailers**

  * Retorna todos os trailers ou filtrados por nome e/ou categoria.
* **Filtro por nome do anime**

  * Busca exata (case sensitive ou insensitive, conforme implementação).
* **Filtro por múltiplas categorias**

  * Filtra qualquer trailer que tenha pelo menos uma categoria da lista enviada.

---

## 🛠️ Estrutura do JSON

```json
[
  {
    "animeName": "DAN DA DAN",
    "trailerTitle": "Season 2 | Official Trailer | Crunchyroll",
    "videoId": "0G7HX16YTLU",
    "category": ["ação", "sobrenatural", "comédia"]
  },
  {
    "animeName": "To Your Eternity",
    "trailerTitle": "Season 3 | Official Trailer | Crunchyroll",
    "videoId": "7J1WVEF3G2g",
    "category": ["drama", "fantasia", "sobrenatural"]
  }
]
```

---

## 🔹 Endpoints da API

| Endpoint                                                  | Descrição                                                          |
| --------------------------------------------------------- | ------------------------------------------------------------------ |
| `/api/list`                                               | Retorna todos os trailers                                          |
| `/api/trailer`                                            | Retorna todos os trailers                                          |
| `/api/trailer?animename=NOME`                             | Retorna trailers filtrados pelo nome do anime                      |
| `/api/trailer?category=CAT1&category=CAT2`                | Retorna trailers que tenham pelo menos uma das categorias enviadas |

---

## 🔧 Como o código funciona

### repositoryAnimeTrailer

* Lê o arquivo JSON (`anime-trailer.json`)
* Filtra por `animeName` se passado
* Filtra por múltiplas `category` se passado
* Retorna array de trailers

### serviceFilterAnimeTrailer

* Recebe a query string (`animename` e `category`)
* Passa os filtros para o repositório
* Retorna `FilterAnimeTrailerModel` com:

  * `statusCode`: `OK` se encontrou trailers ou `NoContent` se não encontrou
  * `body`: array de trailers filtrados

---

## 💡 Próximos Passos

1. **Back-end**

   * Rodar o servidor Node.js + TypeScript
   * Garantir que os filtros por nome e categoria funcionem corretamente

2. **Front-end**

   * Pode ser HTML/JS puro ou framework (React, Next.js, etc.)
   * Consumir os endpoints da API
   * Renderizar trailers em sessões horizontais por categoria
   * Barra de busca por nome do anime

3. **Futuro**

   * Favoritos / watchlist
   * Notificações de novos trailers
   * Integração com a API do YouTube para trailers em tempo real

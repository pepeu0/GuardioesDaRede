DROP TABLE IF EXISTS perguntas;

CREATE TABLE perguntas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  pergunta TEXT NOT NULL,
  opcoes TEXT NOT NULL,
  resposta_correta TEXT NOT NULL
);

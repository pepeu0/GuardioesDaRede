// backend/server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();

// Aponta para a pasta raiz do projeto (onde está seu index.html, CSS, JS, etc.)
const rootPath = path.join(__dirname, '..');

const db = new sqlite3.Database(path.join(__dirname, 'quiz.db'));
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Serve todos os arquivos estáticos da pasta raiz
app.use(express.static(rootPath));

// Quando acessarem a raiz, entrega o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(rootPath, 'index.html'));
});

// Criação das tabelas se não existirem
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS participantes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      ra TEXT,
      curso TEXT,
      email TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS perguntas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      pergunta TEXT,
      opcaoA TEXT,
      opcaoB TEXT,
      opcaoC TEXT,
      opcaoD TEXT,
      respostaCorreta TEXT
  )`);
});

// Rota para cadastro de participante
app.post('/api/participantes', (req, res) => {
  const { nome, ra, curso, email } = req.body;
  db.run(
    `INSERT INTO participantes (nome, ra, curso, email) VALUES (?, ?, ?, ?)`,
    [nome, ra, curso, email],
    function (err) {
      if (err) {
        return res.status(500).json({ erro: 'Erro ao cadastrar participante.' });
      }
      res.json({ sucesso: true, id: this.lastID });
    }
  );
});

// Rota para pegar 10 perguntas aleatórias
app.get('/api/perguntas', (req, res) => {
  db.all(`SELECT * FROM perguntas ORDER BY RANDOM() LIMIT 10`, (err, rows) => {
    if (err) {
      return res.status(500).json({ erro: 'Erro ao buscar perguntas.' });
    }
    res.json(rows);
  });
});

// Rota para verificar respostas
app.post('/api/verificar', (req, res) => {
  const respostas = req.body.respostas;
  let pontuacao = 0;
  let verificadas = 0;

  respostas.forEach((r) => {
    db.get(
      `SELECT respostaCorreta FROM perguntas WHERE id = ?`,
      [r.id],
      (err, row) => {
        if (row && row.respostaCorreta === r.resposta) {
          pontuacao++;
        }

        verificadas++;
        if (verificadas === respostas.length) {
          res.json({ pontuacao });
        }
      }
    );
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

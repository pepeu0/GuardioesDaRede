const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const db = new sqlite3.Database('./quiz.db');
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

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
    db.run(`INSERT INTO participantes (nome, ra, curso, email) VALUES (?, ?, ?, ?)`,
        [nome, ra, curso, email],
        function (err) {
            if (err) {
                return res.status(500).json({ erro: 'Erro ao cadastrar participante.' });
            }
            res.json({ sucesso: true, id: this.lastID });
        });
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

    respostas.forEach((r, index) => {
        db.get(`SELECT respostaCorreta FROM perguntas WHERE id = ?`, [r.id], (err, row) => {
            if (row && row.respostaCorreta === r.resposta) {
                pontuacao++;
            }

            verificadas++;
            if (verificadas === respostas.length) {
                res.json({ pontuacao });
            }
        });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

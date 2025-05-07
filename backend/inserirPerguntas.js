// inserirPerguntas.js
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('quiz.db');

const sql = fs.readFileSync('perguntas.sql', 'utf-8');

db.exec(sql, (err) => {
  if (err) {
    console.error('Erro ao executar SQL:', err.message);
  } else {
    console.log('Perguntas inseridas com sucesso.');
  }
  db.close();
});

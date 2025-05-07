const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Caminho para o banco de dados
const dbPath = path.resolve(__dirname, 'quiz.db');
const db = new sqlite3.Database(dbPath);

// Criação das tabelas, se não existirem
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS perguntas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      pergunta TEXT NOT NULL,
      opcoes TEXT NOT NULL,
      correta TEXT NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS resultados (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      ra TEXT NOT NULL,
      curso TEXT NOT NULL,
      email TEXT NOT NULL,
      pontuacao INTEGER NOT NULL,
      data DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é backdoors?`,
        `["Definição correta de backdoors", "Uso comum de backdoors", "Definição incorreta de backdoors", "Função de backdoors"]`,
        `Definição correta de backdoors`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é engenharia social?`,
        `["Definição incorreta de engenharia social", "Uso comum de engenharia social", "Função de engenharia social", "Definição correta de engenharia social"]`,
        `Definição correta de engenharia social`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é engenharia social?`,
        `["Uso comum de engenharia social", "Função de engenharia social", "Definição incorreta de engenharia social", "Definição correta de engenharia social"]`,
        `Definição correta de engenharia social`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é spyware?`,
        `["Uso comum de spyware", "Definição incorreta de spyware", "Definição correta de spyware", "Função de spyware"]`,
        `Definição correta de spyware`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é spyware?`,
        `["Definição incorreta de spyware", "Função de spyware", "Definição correta de spyware", "Uso comum de spyware"]`,
        `Definição correta de spyware`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é vpn?`,
        `["Uso comum de vpn", "Função de vpn", "Definição correta de vpn", "Definição incorreta de vpn"]`,
        `Definição correta de vpn`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é https?`,
        `["Uso comum de https", "Definição incorreta de https", "Função de https", "Definição correta de https"]`,
        `Definição correta de https`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é segurança em redes corporativas?`,
        `["Função de segurança em redes corporativas", "Definição correta de segurança em redes corporativas", "Uso comum de segurança em redes corporativas", "Definição incorreta de segurança em redes corporativas"]`,
        `Definição correta de segurança em redes corporativas`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é antivírus?`,
        `["Definição correta de antivírus", "Função de antivírus", "Definição incorreta de antivírus", "Uso comum de antivírus"]`,
        `Definição correta de antivírus`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é política de segurança?`,
        `["Função de política de segurança", "Uso comum de política de segurança", "Definição correta de política de segurança", "Definição incorreta de política de segurança"]`,
        `Definição correta de política de segurança`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é https?`,
        `["Definição incorreta de https", "Definição correta de https", "Função de https", "Uso comum de https"]`,
        `Definição correta de https`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é ransomware?`,
        `["Função de ransomware", "Definição correta de ransomware", "Definição incorreta de ransomware", "Uso comum de ransomware"]`,
        `Definição correta de ransomware`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é política de segurança?`,
        `["Uso comum de política de segurança", "Função de política de segurança", "Definição correta de política de segurança", "Definição incorreta de política de segurança"]`,
        `Definição correta de política de segurança`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é engenharia social?`,
        `["Definição incorreta de engenharia social", "Uso comum de engenharia social", "Função de engenharia social", "Definição correta de engenharia social"]`,
        `Definição correta de engenharia social`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é criptografia?`,
        `["Definição correta de criptografia", "Uso comum de criptografia", "Função de criptografia", "Definição incorreta de criptografia"]`,
        `Definição correta de criptografia`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é política de segurança?`,
        `["Uso comum de política de segurança", "Definição incorreta de política de segurança", "Função de política de segurança", "Definição correta de política de segurança"]`,
        `Definição correta de política de segurança`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é spyware?`,
        `["Definição incorreta de spyware", "Uso comum de spyware", "Definição correta de spyware", "Função de spyware"]`,
        `Definição correta de spyware`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é criptografia?`,
        `["Uso comum de criptografia", "Definição incorreta de criptografia", "Definição correta de criptografia", "Função de criptografia"]`,
        `Definição correta de criptografia`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é antivírus?`,
        `["Uso comum de antivírus", "Função de antivírus", "Definição correta de antivírus", "Definição incorreta de antivírus"]`,
        `Definição correta de antivírus`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é segurança em redes corporativas?`,
        `["Função de segurança em redes corporativas", "Definição correta de segurança em redes corporativas", "Definição incorreta de segurança em redes corporativas", "Uso comum de segurança em redes corporativas"]`,
        `Definição correta de segurança em redes corporativas`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é https?`,
        `["Função de https", "Definição incorreta de https", "Uso comum de https", "Definição correta de https"]`,
        `Definição correta de https`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é firewall?`,
        `["Definição correta de firewall", "Definição incorreta de firewall", "Função de firewall", "Uso comum de firewall"]`,
        `Definição correta de firewall`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é vpn?`,
        `["Função de vpn", "Definição incorreta de vpn", "Definição correta de vpn", "Uso comum de vpn"]`,
        `Definição correta de vpn`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é keyloggers?`,
        `["Função de keyloggers", "Uso comum de keyloggers", "Definição correta de keyloggers", "Definição incorreta de keyloggers"]`,
        `Definição correta de keyloggers`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é antivírus?`,
        `["Definição incorreta de antivírus", "Definição correta de antivírus", "Função de antivírus", "Uso comum de antivírus"]`,
        `Definição correta de antivírus`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é vpn?`,
        `["Função de vpn", "Definição incorreta de vpn", "Uso comum de vpn", "Definição correta de vpn"]`,
        `Definição correta de vpn`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é ataques ddos?`,
        `["Uso comum de ataques ddos", "Função de ataques ddos", "Definição incorreta de ataques ddos", "Definição correta de ataques ddos"]`,
        `Definição correta de ataques ddos`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é spyware?`,
        `["Uso comum de spyware", "Definição correta de spyware", "Definição incorreta de spyware", "Função de spyware"]`,
        `Definição correta de spyware`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é engenharia social?`,
        `["Uso comum de engenharia social", "Definição correta de engenharia social", "Função de engenharia social", "Definição incorreta de engenharia social"]`,
        `Definição correta de engenharia social`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é spyware?`,
        `["Uso comum de spyware", "Definição incorreta de spyware", "Função de spyware", "Definição correta de spyware"]`,
        `Definição correta de spyware`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é engenharia social?`,
        `["Definição correta de engenharia social", "Definição incorreta de engenharia social", "Função de engenharia social", "Uso comum de engenharia social"]`,
        `Definição correta de engenharia social`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é vpn?`,
        `["Definição incorreta de vpn", "Função de vpn", "Uso comum de vpn", "Definição correta de vpn"]`,
        `Definição correta de vpn`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é autenticação de dois fatores?`,
        `["Função de autenticação de dois fatores", "Uso comum de autenticação de dois fatores", "Definição incorreta de autenticação de dois fatores", "Definição correta de autenticação de dois fatores"]`,
        `Definição correta de autenticação de dois fatores`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é autenticação de dois fatores?`,
        `["Função de autenticação de dois fatores", "Definição correta de autenticação de dois fatores", "Uso comum de autenticação de dois fatores", "Definição incorreta de autenticação de dois fatores"]`,
        `Definição correta de autenticação de dois fatores`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é política de segurança?`,
        `["Definição incorreta de política de segurança", "Uso comum de política de segurança", "Função de política de segurança", "Definição correta de política de segurança"]`,
        `Definição correta de política de segurança`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é keyloggers?`,
        `["Definição correta de keyloggers", "Uso comum de keyloggers", "Função de keyloggers", "Definição incorreta de keyloggers"]`,
        `Definição correta de keyloggers`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é spyware?`,
        `["Função de spyware", "Uso comum de spyware", "Definição correta de spyware", "Definição incorreta de spyware"]`,
        `Definição correta de spyware`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é política de segurança?`,
        `["Uso comum de política de segurança", "Definição incorreta de política de segurança", "Definição correta de política de segurança", "Função de política de segurança"]`,
        `Definição correta de política de segurança`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é malware?`,
        `["Definição incorreta de malware", "Uso comum de malware", "Definição correta de malware", "Função de malware"]`,
        `Definição correta de malware`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é autenticação de dois fatores?`,
        `["Definição incorreta de autenticação de dois fatores", "Definição correta de autenticação de dois fatores", "Uso comum de autenticação de dois fatores", "Função de autenticação de dois fatores"]`,
        `Definição correta de autenticação de dois fatores`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é engenharia social?`,
        `["Uso comum de engenharia social", "Função de engenharia social", "Definição incorreta de engenharia social", "Definição correta de engenharia social"]`,
        `Definição correta de engenharia social`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é engenharia social?`,
        `["Uso comum de engenharia social", "Definição incorreta de engenharia social", "Função de engenharia social", "Definição correta de engenharia social"]`,
        `Definição correta de engenharia social`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é autenticação de dois fatores?`,
        `["Função de autenticação de dois fatores", "Definição incorreta de autenticação de dois fatores", "Uso comum de autenticação de dois fatores", "Definição correta de autenticação de dois fatores"]`,
        `Definição correta de autenticação de dois fatores`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é engenharia social?`,
        `["Função de engenharia social", "Definição correta de engenharia social", "Definição incorreta de engenharia social", "Uso comum de engenharia social"]`,
        `Definição correta de engenharia social`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é senhas fortes?`,
        `["Uso comum de senhas fortes", "Definição correta de senhas fortes", "Função de senhas fortes", "Definição incorreta de senhas fortes"]`,
        `Definição correta de senhas fortes`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é phishing?`,
        `["Uso comum de phishing", "Definição incorreta de phishing", "Função de phishing", "Definição correta de phishing"]`,
        `Definição correta de phishing`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é criptografia?`,
        `["Uso comum de criptografia", "Definição correta de criptografia", "Definição incorreta de criptografia", "Função de criptografia"]`,
        `Definição correta de criptografia`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é engenharia social?`,
        `["Uso comum de engenharia social", "Definição correta de engenharia social", "Função de engenharia social", "Definição incorreta de engenharia social"]`,
        `Definição correta de engenharia social`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é política de segurança?`,
        `["Uso comum de política de segurança", "Definição incorreta de política de segurança", "Função de política de segurança", "Definição correta de política de segurança"]`,
        `Definição correta de política de segurança`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é backdoors?`,
        `["Definição incorreta de backdoors", "Uso comum de backdoors", "Função de backdoors", "Definição correta de backdoors"]`,
        `Definição correta de backdoors`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é vpn?`,
        `["Definição incorreta de vpn", "Uso comum de vpn", "Função de vpn", "Definição correta de vpn"]`,
        `Definição correta de vpn`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é https?`,
        `["Definição correta de https", "Função de https", "Uso comum de https", "Definição incorreta de https"]`,
        `Definição correta de https`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é antivírus?`,
        `["Uso comum de antivírus", "Definição correta de antivírus", "Definição incorreta de antivírus", "Função de antivírus"]`,
        `Definição correta de antivírus`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é ataques ddos?`,
        `["Definição correta de ataques ddos", "Função de ataques ddos", "Definição incorreta de ataques ddos", "Uso comum de ataques ddos"]`,
        `Definição correta de ataques ddos`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é ataques ddos?`,
        `["Função de ataques ddos", "Definição correta de ataques ddos", "Definição incorreta de ataques ddos", "Uso comum de ataques ddos"]`,
        `Definição correta de ataques ddos`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é https?`,
        `["Função de https", "Definição correta de https", "Definição incorreta de https", "Uso comum de https"]`,
        `Definição correta de https`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é malware?`,
        `["Definição incorreta de malware", "Definição correta de malware", "Uso comum de malware", "Função de malware"]`,
        `Definição correta de malware`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é proxy?`,
        `["Definição correta de proxy", "Definição incorreta de proxy", "Função de proxy", "Uso comum de proxy"]`,
        `Definição correta de proxy`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é segurança em wi-fi?`,
        `["Definição correta de segurança em wi-fi", "Função de segurança em wi-fi", "Uso comum de segurança em wi-fi", "Definição incorreta de segurança em wi-fi"]`,
        `Definição correta de segurança em wi-fi`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é vpn?`,
        `["Definição incorreta de vpn", "Uso comum de vpn", "Definição correta de vpn", "Função de vpn"]`,
        `Definição correta de vpn`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é política de segurança?`,
        `["Definição correta de política de segurança", "Definição incorreta de política de segurança", "Função de política de segurança", "Uso comum de política de segurança"]`,
        `Definição correta de política de segurança`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é ataques ddos?`,
        `["Definição correta de ataques ddos", "Uso comum de ataques ddos", "Função de ataques ddos", "Definição incorreta de ataques ddos"]`,
        `Definição correta de ataques ddos`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é ransomware?`,
        `["Definição correta de ransomware", "Definição incorreta de ransomware", "Uso comum de ransomware", "Função de ransomware"]`,
        `Definição correta de ransomware`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é https?`,
        `["Definição incorreta de https", "Função de https", "Definição correta de https", "Uso comum de https"]`,
        `Definição correta de https`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é https?`,
        `["Função de https", "Uso comum de https", "Definição incorreta de https", "Definição correta de https"]`,
        `Definição correta de https`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é segurança em wi-fi?`,
        `["Função de segurança em wi-fi", "Uso comum de segurança em wi-fi", "Definição correta de segurança em wi-fi", "Definição incorreta de segurança em wi-fi"]`,
        `Definição correta de segurança em wi-fi`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é phishing?`,
        `["Uso comum de phishing", "Definição correta de phishing", "Função de phishing", "Definição incorreta de phishing"]`,
        `Definição correta de phishing`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é política de segurança?`,
        `["Função de política de segurança", "Definição incorreta de política de segurança", "Definição correta de política de segurança", "Uso comum de política de segurança"]`,
        `Definição correta de política de segurança`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é proxy?`,
        `["Definição incorreta de proxy", "Definição correta de proxy", "Uso comum de proxy", "Função de proxy"]`,
        `Definição correta de proxy`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é spyware?`,
        `["Uso comum de spyware", "Definição correta de spyware", "Definição incorreta de spyware", "Função de spyware"]`,
        `Definição correta de spyware`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é malware?`,
        `["Uso comum de malware", "Definição correta de malware", "Função de malware", "Definição incorreta de malware"]`,
        `Definição correta de malware`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é firewall?`,
        `["Definição correta de firewall", "Função de firewall", "Definição incorreta de firewall", "Uso comum de firewall"]`,
        `Definição correta de firewall`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é https?`,
        `["Função de https", "Definição correta de https", "Uso comum de https", "Definição incorreta de https"]`,
        `Definição correta de https`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é engenharia social?`,
        `["Uso comum de engenharia social", "Função de engenharia social", "Definição correta de engenharia social", "Definição incorreta de engenharia social"]`,
        `Definição correta de engenharia social`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é backdoors?`,
        `["Definição correta de backdoors", "Definição incorreta de backdoors", "Função de backdoors", "Uso comum de backdoors"]`,
        `Definição correta de backdoors`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é antivírus?`,
        `["Uso comum de antivírus", "Função de antivírus", "Definição correta de antivírus", "Definição incorreta de antivírus"]`,
        `Definição correta de antivírus`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é segurança em wi-fi?`,
        `["Definição correta de segurança em wi-fi", "Função de segurança em wi-fi", "Definição incorreta de segurança em wi-fi", "Uso comum de segurança em wi-fi"]`,
        `Definição correta de segurança em wi-fi`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é keyloggers?`,
        `["Função de keyloggers", "Definição incorreta de keyloggers", "Definição correta de keyloggers", "Uso comum de keyloggers"]`,
        `Definição correta de keyloggers`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é firewall?`,
        `["Definição correta de firewall", "Definição incorreta de firewall", "Função de firewall", "Uso comum de firewall"]`,
        `Definição correta de firewall`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é autenticação de dois fatores?`,
        `["Definição incorreta de autenticação de dois fatores", "Função de autenticação de dois fatores", "Definição correta de autenticação de dois fatores", "Uso comum de autenticação de dois fatores"]`,
        `Definição correta de autenticação de dois fatores`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é segurança em wi-fi?`,
        `["Função de segurança em wi-fi", "Definição incorreta de segurança em wi-fi", "Definição correta de segurança em wi-fi", "Uso comum de segurança em wi-fi"]`,
        `Definição correta de segurança em wi-fi`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é backdoors?`,
        `["Uso comum de backdoors", "Definição correta de backdoors", "Função de backdoors", "Definição incorreta de backdoors"]`,
        `Definição correta de backdoors`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é keyloggers?`,
        `["Definição correta de keyloggers", "Função de keyloggers", "Uso comum de keyloggers", "Definição incorreta de keyloggers"]`,
        `Definição correta de keyloggers`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é https?`,
        `["Definição incorreta de https", "Função de https", "Definição correta de https", "Uso comum de https"]`,
        `Definição correta de https`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é https?`,
        `["Uso comum de https", "Definição correta de https", "Função de https", "Definição incorreta de https"]`,
        `Definição correta de https`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é ids/ips?`,
        `["Definição incorreta de ids/ips", "Função de ids/ips", "Uso comum de ids/ips", "Definição correta de ids/ips"]`,
        `Definição correta de ids/ips`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é proxy?`,
        `["Função de proxy", "Definição incorreta de proxy", "Definição correta de proxy", "Uso comum de proxy"]`,
        `Definição correta de proxy`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é antivírus?`,
        `["Definição correta de antivírus", "Uso comum de antivírus", "Função de antivírus", "Definição incorreta de antivírus"]`,
        `Definição correta de antivírus`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é ids/ips?`,
        `["Definição incorreta de ids/ips", "Função de ids/ips", "Definição correta de ids/ips", "Uso comum de ids/ips"]`,
        `Definição correta de ids/ips`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é segurança em redes corporativas?`,
        `["Função de segurança em redes corporativas", "Definição incorreta de segurança em redes corporativas", "Definição correta de segurança em redes corporativas", "Uso comum de segurança em redes corporativas"]`,
        `Definição correta de segurança em redes corporativas`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é firewall?`,
        `["Definição correta de firewall", "Uso comum de firewall", "Função de firewall", "Definição incorreta de firewall"]`,
        `Definição correta de firewall`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é criptografia?`,
        `["Função de criptografia", "Definição correta de criptografia", "Uso comum de criptografia", "Definição incorreta de criptografia"]`,
        `Definição correta de criptografia`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é criptografia?`,
        `["Definição incorreta de criptografia", "Uso comum de criptografia", "Função de criptografia", "Definição correta de criptografia"]`,
        `Definição correta de criptografia`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é firewall?`,
        `["Função de firewall", "Definição correta de firewall", "Uso comum de firewall", "Definição incorreta de firewall"]`,
        `Definição correta de firewall`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é phishing?`,
        `["Função de phishing", "Uso comum de phishing", "Definição incorreta de phishing", "Definição correta de phishing"]`,
        `Definição correta de phishing`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é https?`,
        `["Definição correta de https", "Definição incorreta de https", "Uso comum de https", "Função de https"]`,
        `Definição correta de https`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é criptografia?`,
        `["Definição incorreta de criptografia", "Uso comum de criptografia", "Função de criptografia", "Definição correta de criptografia"]`,
        `Definição correta de criptografia`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é ids/ips?`,
        `["Função de ids/ips", "Uso comum de ids/ips", "Definição correta de ids/ips", "Definição incorreta de ids/ips"]`,
        `Definição correta de ids/ips`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é backdoors?`,
        `["Definição correta de backdoors", "Uso comum de backdoors", "Função de backdoors", "Definição incorreta de backdoors"]`,
        `Definição correta de backdoors`]);

db.run(`INSERT INTO perguntas (pergunta, opcoes, correta)
        VALUES (?, ?, ?)`, [
        `O que é firewall?`,
        `["Uso comum de firewall", "Definição incorreta de firewall", "Função de firewall", "Definição correta de firewall"]`,
        `Definição correta de firewall`]);
});

module.exports = db;

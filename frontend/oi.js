#!/usr/bin/env node
/*
oopp-plain.js
"Plain" JavaScript (no CJS/ESM exports/imports) — just save e rode com:
  node oopp-plain.js
ou torne executável e rode:
  chmod +x oopp-plain.js && ./oopp-plain.js

Características:
- Não depende de module system (CommonJS/ESM): roda em qualquer configuração Node.
- Evita silent failure: todo o demo está embrulhado em try/catch que imprime stack.
- Sem frameworks, sem exports/imports, sem top-level await.
- Use dos2unix se necessário: dos2unix oopp-plain.js
*/

"use strict";

class Pessoa {
  constructor(nome, idade, altura, cidade) {
    this.nome = String(nome);
    this.idade = Number(idade);
    this.altura = Number(altura);
    this.cidade = String(cidade);
  }

  speak() {
    const alturaStr = Number.isFinite(this.altura)
      ? this.altura.toFixed(2)
      : String(this.altura);
    console.log(
      `Oi, meu nome é ${this.nome}, tenho ${this.idade} anos, moro em ${this.cidade} e tenho ${alturaStr}m de altura.`,
    );
  }
}

class Dev extends Pessoa {
  // herança
  constructor(nome, idade, altura, cidade, tempo, lang) {
    super(nome, idade, altura, cidade);
    this.tempo = Number(tempo);
    this.lang = String(lang);
  }

  // Fábrica simples: cria um Dev a partir de um objeto com campos públicos compatíveis
  static fromBase(base, tempo, lang) {
    // reinstanciação de um objeto da classe mãe
    if (!base || typeof base !== "object") {
      throw new TypeError(
        "base precisa ser um objeto com campos nome, idade, altura, cidade",
      );
    }
    return new this(
      base.nome,
      base.idade,
      base.altura,
      base.cidade,
      tempo,
      lang,
    );
  }

  speak() {
    // Polimorfismo
    console.log(
      `Oi, sou ${this.nome}, moro em ${this.cidade}, tenho ${this.idade} anos e programo há ${this.tempo} anos usando ${this.lang}.`,
    );
  }
}

/* Main demo encapsulado para evitar silent fails e garantir logs claros */
function main() {
  console.log(">>> Demo OOP plain JS — iniciando\n");

  // Criando Pessoas
  const p1 = new Pessoa("Emanuel", 20, 1.89, "Macaé");
  const p2 = new Pessoa("Vítor", 18, 1.75, "Rio das Ostras");
  const p3 = new Pessoa("Otávio", 20, 1.8, "Macaé");

  // Mostra comportamento base
  p1.speak();
  p2.speak();
  p3.speak();

  console.log();

  // Convertendo Pessoas para Devs via fábrica estática
  const dev1 = Dev.fromBase(p1, 2, "Python");
  const dev2 = Dev.fromBase(p2, 1, "JS");
  const dev3 = Dev.fromBase(p3, 1, "Rust");

  // Polimorfismo: cada instância usa sua implementação de speak()
  dev1.speak();
  dev2.speak();
  dev3.speak();

  console.log();

  // Exemplo heterogêneo e iterado
  const list = [p1, dev1, p2, dev2, p3, dev3];
  console.log("Iterando polimorficamente:");
  for (const person of list) {
    // Proteção: se algo não tiver speak, exibe aviso
    if (typeof person.speak === "function") {
      person.speak();
    } else {
      console.warn("Objeto sem método speak():", person);
    }
  }

  console.log("\n>>> Demo finalizada com sucesso");
}

/* Executa e captura qualquer erro — evita silêncio */
try {
  main();
} catch (err) {
  // imprime uma mensagem informativa e stack para debugging
  console.error(
    "Erro ao executar o script:",
    err && err.message ? err.message : err,
  );
  if (err && err.stack) console.error(err.stack);
  // sai com código não-zero para indicar falha
  if (typeof process !== "undefined" && typeof process.exit === "function")
    process.exit(1);
}

class Livro {
  // Atributos
  #titulo;
  #autor;
  #genero;
  #edicao;
  #data;

  // métodos
  constructor(titulo, autor, genero, edicao, data) {
    this.#titulo = titulo;
    this.#autor = autor;
    this.#genero = genero;
    this.#edicao = edicao;
    this.#data = data;
  }
  mostrarAtributos() {
    console.log(
      "Atributos do Livro:\nTítulo: ",
      this.#titulo,
      "\nAutor: ",
      this.#autor,
      "\nGênero: ",
      this.#genero,
      "\nEdição: ",
      this.#edicao,
      "\nData de lançamento:",
      this.#data,
    );
  }
  //getters
  get autor() {
    return this.#autor;
  }
}
function main() {
  let l1 = new Livro("Cosmos", "Carl Sagan", "Ciência", "1º", "1980");
  l1.mostrarAtributos();
  let l2 = new Livro(
    "Como Ser um Bom Programador",
    "Otávio Augusto de Sousa Brito e Silva",
    "T.I",
    "1º",
    "2040",
  );
  l2.mostrarAtributos();
}

main();

// Função para executar o exemplo de fruta
const fruta = {
  nome: "Maçã",
  cor: "Vermelha",
  sabor: function() {
    return "Doce";
  }
};

document.getElementById("botao1").addEventListener("click", function () {
  alert(
    "Nome: " + fruta.nome + "\n" +
    "Cor: " + fruta.cor + "\n" +
    "Sabor: " + fruta.sabor()
  );
});

// Função para executar o exemplo de teclado
const teclado = {
  qualidade: "Novo",
  podevender: "Disponível",  // pode ser 'Disponível' ou 'Não Disponível'
  mostrarInfo: function() {
    alert("O teclado está " + this.qualidade + " e o teclado está: " + this.podevender);
  }
};

document.getElementById("botao2").addEventListener("click", function () {
  teclado.mostrarInfo();
});

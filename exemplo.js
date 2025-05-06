// Função 1: Mostra informações da fruta
function mostrarFruta() {
  const nome = "Maçã";
  const cor = "Vermelha";
  const sabor = "Doce";

  return `Nome: ${nome}, Cor: ${cor}, Sabor: ${sabor}`;
}

// Adicionando evento de clique no botão para mostrar o alerta
document.getElementById("botao1").addEventListener("click", function () {
  alert(mostrarFruta());
});

// Função 2: Mostra informações do teclado
function mostrarTeclado() {
  const qualidade = "Novo";
  const disponibilidade = "Disponível";

  alert(`Informações do Teclado: Qualidade: ${qualidade}, Disponibilidade: ${disponibilidade}`);
}

// Adicionando evento de clique no botão do teclado
document.getElementById("botao2").addEventListener("click", function () {
  mostrarTeclado();
});

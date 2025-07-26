const versiculos = [
  "O Senhor é o meu pastor e nada me faltará. – Salmos 23:1",
  "Tudo posso naquele que me fortalece. – Filipenses 4:13",
  "Entrega o teu caminho ao Senhor; confia nele, e o mais ele fará. – Salmos 37:5",
  "Alegrai-vos na esperança, sede pacientes na tribulação. – Romanos 12:12",
  "Clama a mim e responder-te-ei. – Jeremias 33:3",
  "Deus é o nosso refúgio e fortaleza. – Salmos 46:1"
];

function mostrarVersiculo() {
  const index = Math.floor(Math.random() * versiculos.length);
  document.getElementById("versiculo").innerText = versiculos[index];
}
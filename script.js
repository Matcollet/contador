
function diminuir1000() {
  numero = numero - 1000
  mostrarNaTela()
}

function diminuir100() {
  numero = numero - 100
  mostrarNaTela()
}

function diminuir10() {
  numero = numero - 10
  mostrarNaTela()
}

function aumentar1() {
  numero = numero + 1
  mostrarNaTela()
}

function diminuir1() {
  numero = numero - 1
  mostrarNaTela()
}

function aumentar10() {
  numero = numero + 10
  mostrarNaTela()
}

function aumentar100() {
  numero = numero + 100
  mostrarNaTela()
}

function aumentar1000() {
  numero = numero + 1000
  mostrarNaTela()
}

function zerar() {
  numero = numero - numero
  mostrarNaTela()
}

function generateConfetti() {
  confetti({
      particleCount: 130,
      spread: 100,
      origin: { y: 0.6 }
  });
  mostrarNaTela()

}
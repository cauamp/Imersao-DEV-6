
var limite = 100
var numeroSecreto = Math.floor(Math.random() * 1000) + 1;

$('.easy').on('click', function () {
  $('.contador').show();
  $('.seletor').hide();
  limite = 15
  contadorTentativas.innerHTML = limite;
  gameOver.innerHTML = "Tentativas Restantes";
});
$('.mid').on('click', function () {
  $('.contador').show();
  $('.seletor').hide();
  limite = 10
  contadorTentativas.innerHTML = limite;
  gameOver.innerHTML = "Tentativas Restantes";
});
$('.hard').on('click', function () {
  $('.contador').show();
  $('.seletor').hide();
  limite = 7
  contadorTentativas.innerHTML = limite;
  gameOver.innerHTML = "Tentativas Restantes";
});

$('input[id="chute"]').on('keyup', ({ key }) => {
  if (key === "Enter") {
    mentalista();
  }
});

$('button[name="Jogar"]').on('click', (e) => {
  mentalista();
});


function mentalista() {
  chute = document.getElementById("chute").value;

  if (chute > numeroSecreto && limite > 1) {
    dica.innerHTML = 'Errou ... \nO chute anterior é maior que o número secreto\n';
    limite--;
    contadorTentativas.innerHTML = limite;
  } else if (chute < numeroSecreto && limite > 1) {
    dica.innerHTML = 'Errou... \nO chute anterior é menor que o número secreto\n';
    limite--;
    contadorTentativas.innerHTML = limite;
  } else if (chute == numeroSecreto) {
    gameOver.innerHTML = "PARABÉNS";
    dica.innerHTML = "Você acertou o numero secreto! \nO número era " + numeroSecreto;
    contadorTentativas.innerHTML = "";
    $('.playAgain').show();
    $('.contador input[id="chute"]').hide();
    $('.contador button[id="bgnBtn"]').hide();
  } else if (limite == 1) {
    gameOver.innerHTML = "GAME OVER";
    dica.innerHTML = "Você não acertou o número secreto :( \nO número era " + numeroSecreto;
    contadorTentativas.innerHTML = "";
    $('.playAgain').show();
    $('.contador input[id="chute"]').hide();
    $('.contador button[id="bgnBtn"]').hide();
  }
}


$('.playAgain').on('click', function () {
  $('.contador').hide();
  $('.seletor').show();
  $('.playAgain').hide();
  $('.contador input[id="chute"]').show();
  $('.contador button[id="bgnBtn"]').show();
  dica.innerHTML = "";
  document.querySelector('input[id="chute"]').value = "";
  limite = 100
  numeroSecreto = Math.floor(Math.random() * 1000) + 1;
});


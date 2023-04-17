  // aqui importamos os id's e as classes do HTML para que (no javascript) elas retornem como variáveis. 
var bola = document.getElementsByClassName("td")
var jogador = "X"
var jogadorVez = document.getElementById("jogador-vez")
var botaoReset = document.getElementById("reset")
var resultado = document.getElementById("resultado")


  // logo abaixo, inserimos todas as combinações de possíveis vitórias no jogo da velha.
function verificarVencedor() {
  var combinacoesVencedoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  // verificamos se as combinações são válidas; se as posições foram devidamente ocupadas por 3 símbolos iguais.
  for (var i = 0; i < combinacoesVencedoras.length; i++) {
    var a = combinacoesVencedoras[i][0]
    var b = combinacoesVencedoras[i][1]
    var c = combinacoesVencedoras[i][2]

  // se uma das posições estiver vazia, continue com o looping.
    if (bola[a].innerHTML === "" || bola[b].innerHTML === "" || bola[c].innerHTML === "") {
      continue
    }

    if (bola[a].innerHTML === bola[b].innerHTML && bola[b].innerHTML === bola[c].innerHTML) {

  // abaixo, exiba para o usuário qual jogador venceu a partida.
      resultado.innerHTML = "Jogador " + bola[a].innerHTML + " ganhou!"

  // caso uma das combinações (de vitória) seja realizada, retorne isso para o sistema (true).
      return true
    }
  }

  // caso nenhuma das combinações (de vitória) seja realizada, retorne isso para o sistema (false).
  return false
}

for (var i = 0; i <= 8; i++) {

  // verifique o click
  bola[i].addEventListener("click", function () {
  // caso o jogo já tenha sido ganho, também não permita marcar mais posições
  // ao clicar, verifique se a posição é vazia, ou seja, se ela já não está marcada por "X" ou "O"
    if (this.innerHTML !== "" || verificarVencedor()) {
      return
    }

  // depois do clique, o conteúdo daquela posição é alterado para "X" ou "O", dependendo de quem é a vez de jogar.
    this.innerHTML = jogador

  // exibe ao usuário de quem é a vez de marcar uma posição, ou seja, de jogar.
    jogadorVez.innerHTML = (jogador === "X") ? "O" : "X"

  // alguém venceu? se sim, pare a partida. 
    if (verificarVencedor()) {
      return
    }

  // se o jogador atual for o "X", o próximo será o "O"
    if (jogador === "X") {
      jogador = "O"
    } else {
      jogador = "X"
    }
  })
}

  // adicionamos um evento para que, caso haja um click no botão reset, ele realmente limpe as jogadas anteriores.
botaoReset.addEventListener("click", function () {
  for (var i = 0; i <= 8; i++) {
    bola[i].innerHTML = ""
  }
  jogador = "X"
  jogadorVez.innerHTML = "X"
  resultado.innerHTML = ""
  // remova-os e deixe apenas espaços vazios.
})


  // importando os elementos do HTML
var botaoModoEscuro = document.getElementById("modo-escuro");
var body = document.getElementsByTagName("body")[0];

  // por fim, logo abaixo adicionamos um evento que, ao clicar em um botão, o site se altera (automaticamente).
  // para o tema "escuro"; o botão é alterado para o texto "modo claro" (a outra opção de visualização).
  // caso o usuário clique novamente, o site voltará ao "modo escuro". 


botaoModoEscuro.addEventListener("click", function () {
  if (body.classList.contains("dark")) {
  // se estiver no modo "dark", remova-o.
    body.classList.remove("dark");
    botaoModoEscuro.innerHTML = "Modo escuro";
  // e altere o botão para o texto "modo escuro".
  } else {
  // se o site ainda não estiver no modo "dark", adicione-o ao site.
    body.classList.add("dark");
    botaoModoEscuro.innerHTML = "Modo claro";
  // e altere o botão para o texto "modo claro".
  }
});
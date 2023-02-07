var listaJogadores = [
    {
      nome: "Paulo",
      fotoJogador:
        "https://media.licdn.com/dms/image/C4D03AQHNUGchMAa-Yw/profile-displayphoto-shrink_200_200/0/1556583729599?e=1680739200&v=beta&t=KPjG5nqYNEzM7uAsJk11wUtmlPpmWgitMniwVhD45vM",
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    },
    {
      nome: "Rafa",
      fotoJogador:
        "https://media.licdn.com/dms/image/C4D03AQE3T9SwW5oPGw/profile-displayphoto-shrink_200_200/0/1612878972645?e=1680739200&v=beta&t=0T-0hgjDLZ4V4X7ouBWeFgIxOvbRpE04xOvxLLzEwEA",
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    },
    {
      nome: "Guilherme",
      fotoJogador:
        "https://media.licdn.com/dms/image/C4D03AQGpSwZHEvR_4g/profile-displayphoto-shrink_200_200/0/1547049647105?e=1680739200&v=beta&t=hsAwE4soiWw9cuJYuSb8UEpUGBHccCy7NIJnX2UgmWE",
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    }
  ];
  
  atualizarTabela();
  
  function atualizarTabela() {
    tabelaJogadores.innerHTML = "";
    listaJogadores.forEach((jogador) => {
      jogador.pontos = jogador.vitorias * 3 + jogador.empates;
      tabelaJogadores.innerHTML += `
        <tr>
          <td>${jogador.nome}</td>
          <td><img src = "${jogador.fotoJogador}" class= "fotoJogador" ></td>
          <td>${jogador.vitorias}</td>
          <td>${jogador.empates}</td>
          <td>${jogador.derrotas}</td>
          <td>${jogador.pontos}</td>
          <td><button id = actBtn onClick="adicionarVitoria('${jogador.nome}')">Vitória</button></td>
          <td><button id = actBtn onClick="adicionarEmpate()">Empate</button></td>
        </tr>
  `;
    });
  }
  
  function adicionarVitoria(nome) {
    listaJogadores.forEach((jogador) => {
      if (jogador.nome != nome) {
        jogador.derrotas++;
      } else {
        jogador.vitorias++;
      }
    });
    atualizarTabela();
  }
  
  function adicionarEmpate() {
    listaJogadores.forEach((jogador) => {
      jogador.empates++;
    });
    atualizarTabela();
  }
  
  function adicionarJogador() {
    let nomeNovoJogador = document.getElementById("nomeNovoJogador").value;
    let fotoNovoJogador = document.getElementById("fotoNovoJogador").value;
    if (
      nomeNovoJogador.length == 0 ||
      fotoNovoJogador.length == 0 ||
      (!fotoNovoJogador.endsWith("jpg") && !fotoNovoJogador.endsWith("png"))
    ) {
      alert("Informação Invalida");
      return;
    }
    listaJogadores[listaJogadores.length] = {
      nome: nomeNovoJogador,
      fotoJogador: fotoNovoJogador,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    };
  
    document.querySelector("input[id=nomeNovoJogador]").value = "";
    document.querySelector("input[id=fotoNovoJogador]").value = "";
    $(".novoJogadorDiv").hide();
  
    atualizarTabela();
  }
  
  function zerarPontos() {
    listaJogadores.forEach((jogador) => {
      jogador.vitorias = 0;
      jogador.derrotas = 0;
      jogador.empates = 0;
      jogador.pontos = 0;
    });
    atualizarTabela();
  }
  
  $("button[id='habilitaNovoJogador']").on("click", (e) => {
    $(".novoJogadorDiv").is(":visible")
      ? $(".novoJogadorDiv").hide()
      : $(".novoJogadorDiv").show();
  });
  
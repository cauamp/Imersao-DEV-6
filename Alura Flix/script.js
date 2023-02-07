
var listaFilmes = [{ nome: 'Interestelar', url: 'https://play-lh.googleusercontent.com/em2griqrHoxmxEss_WM5Fi2iqSEKrEfLNAltjX54lREOR0nz0du__KuSi2bA_YNjS4w', trailer: 'https://www.youtube.com/watch?v=mbbPSq63yuM' },
{ nome: 'Django Livre', url: 'https://br.web.img2.acsta.net/medias/nmedia/18/90/07/53/20391069.jpg', trailer: 'https://www.youtube.com/watch?v=0fUCuvNlOCg' },
{ nome: 'Aranhaverso', url: 'https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg', trailer: 'https://www.youtube.com/watch?v=ME0QiRVsmVI' },
{ nome: 'Cidade de Deus', url: 'https://upload.wikimedia.org/wikipedia/pt/1/10/CidadedeDeus.jpg', trailer: 'https://www.youtube.com/watch?v=nBWtTrLxUjM' },
{ nome: 'Duna', url: 'https://br.web.img3.acsta.net/pictures/21/09/29/20/10/5897145.jpg', trailer: 'https://www.youtube.com/watch?v=dnBpZuSUISQ' },
{ nome: 'Shrek', url: 'https://br.web.img2.acsta.net/medias/nmedia/18/91/54/04/20150812.jpg', trailer: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }];




function confereRepeticaoEmLista(lista, indice) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].url == lista[indice].url && i != indice && indice > i) {
            return 0;
        }
    }
    return 1;
}

function carregaFilmes() {
    let numeroFilmes = listaFilmes.length;
    for (let i = 0; i < numeroFilmes; i++) {
        if (confereRepeticaoEmLista(listaFilmes, i)) {
            listaFilmesDiv.innerHTML += `<a href= ${listaFilmes[i].trailer} target="_blank"> <p> <img src=  ${listaFilmes[i].url}> ${listaFilmes[i].nome} </p> </a>`;

        }
    }
}

function inserirFilme() {
    let urlNovoFilme = document.getElementById("inserirUrlFilmeInput").value
    let nomeNovoFilme = document.getElementById("inserirNomeFilmeInput").value
    let trailerNovoFilme = document.getElementById("inserirTrailerFilmeInput").value


    if (urlNovoFilme.length == 0 || nomeNovoFilme.length == 0 || trailerNovoFilme.length == 0 || (!urlNovoFilme.endsWith(".jpg") && !urlNovoFilme.endsWith(".png"))) {
        alert('As informações inseridas são invalidas ou estão incompletas');
        return;
    }

    document.querySelector('input[id="inserirUrlFilmeInput"]').value = ""
    document.querySelector('input[id="inserirNomeFilmeInput"]').value = ""
    document.querySelector('input[id="inserirTrailerFilmeInput"]').value = ""

    let indiceNovoFilme = listaFilmes.length;

    listaFilmes[indiceNovoFilme] = {
        url: urlNovoFilme,
        nome: nomeNovoFilme,
        trailer: trailerNovoFilme
    }

    if (confereRepeticaoEmLista(listaFilmes, indiceNovoFilme)) {
        listaFilmesDiv.innerHTML += `<a href= ${listaFilmes[indiceNovoFilme].trailer} target="_blank"> <p> <img src=  ${listaFilmes[indiceNovoFilme].url}> ${listaFilmes[indiceNovoFilme].nome}  </p> </a>`;
    }
}

function removerFilme() {
    let filme = document.getElementById('inserirNomeFilmeInput').value
    let indice = listaFilmes.map(e => e.nome).indexOf(filme);

    if (indice == -1 || filme == null) {
        alert("Esse título não está presente na lista, digite o nome do filme como ele aparece na abaixo")
        return;
    }
    listaFilmes.splice(indice, 1);

    urlNovoFilme = document.getElementById("inserirUrlFilmeInput").value
    nomeNovoFilme = document.getElementById("inserirNomeFilmeInput").value
    trailerNovoFilme = document.getElementById("inserirTrailerFilmeInput").value
    document.querySelector('input[id="inserirUrlFilmeInput"]').value = ""
    document.querySelector('input[id="inserirNomeFilmeInput"]').value = ""
    document.querySelector('input[id="inserirTrailerFilmeInput"]').value = ""

    listaFilmesDiv.innerHTML = "";
    carregaFilmes();

}

$('input[id="inserirNomeFilmeInput"]').on('keyup', ({ key }) => {
    if (key === "Enter") {
        inserirFilme();
    }
});
$('input[id="inserirUrlFilmeInput"]').on('keyup', ({ key }) => {
    if (key === "Enter") {
        inserirFilme();
    }
});

$("button[id='inserirFilmeBtn']").on('click', inserirFilme);
$("button[id='removerFilmeBtn']").on('click', removerFilme);

carregaFilmes();


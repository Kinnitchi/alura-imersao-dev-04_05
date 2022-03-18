function adicionarAnime() {
  let animeFavorito = document.getElementById('anime').value;
  let imgAnime = '<img src=' + anime + '>';
  let listAnimes = document.getElementById('listAnimes');
  listAnimes.innerHTML = listAnimes.innerHTML + imgAnime;
  let validateJPG = animeFavorito.endsWith('.jpg');
  let validatePNG = animeFavorito.endsWith('.png');
  // let validate = animeFavorito.endsWith('.jpg');

  if (validateJPG && validatePNG) {
    listarAnimes(animeFavorito);
  } else {
    alert('O formato da img invalido');
  }
  document.getElementById('anime').value = '';
}

function listarAnimes(anime) {
  let imgAnime = '<img src=' + anime + '>';
  let listAnimes = document.getElementById('listAnimes');
  listAnimes.innerHTML = listAnimes.innerHTML + imgAnime;
}
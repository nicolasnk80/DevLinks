function toggleMode() {
  let html = document.documentElement
  const img = document.querySelector("#profile img")

  html.classList.toggle('light')

  if (html.classList.contains('light')) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos escuro e jaqueta preta, com fundo colorido.')

  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.')
  }
}
function toggleMode() {
  const html = document.documentElement

  //if(html.classList.contains('light')){
  //  html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}

  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    //se estiver light mode, adicionar light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Maiyk Brito sorrindo, usando óculos de sol, jaqueta de couro e fundo azul com roxo."
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Maiyk Brito sorrindo, usando óculos, jaqueta de couro e fundo azul com roxo."
    )
  }
}

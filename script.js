function calcular(){
    let nAdultos = parseInt(document.getElementById("nAdultos").value)
    let nCriancas = parseInt(document.getElementById("nCriancas").value)
    let duracao = parseFloat(document.getElementById("duracao").value)
    qtdCarne = ((nAdultos*2+nCriancas)*duracao)/10
    qtdAgua = Math.ceil(((nAdultos*2+nCriancas)*duracao)/10)
    qtdRefri = Math.ceil(((nAdultos+nCriancas)*duracao)/10)
    qtdCerveja = ((nAdultos*2)*duracao)
    atualizarPag()
}

function limparPag(){
    let carne = document.getElementById("carne")
    carne.style.display = "inline-block"
    carne.innerHTML = ('<img src="./images/icone_carne.png" alt="Ícone de carne">'+"A quantidade de carne é:")
    let agua = document.getElementById("agua")
    agua.style.display = "inline-block"
    agua.innerHTML = ('<img src="./images/icone_agua.png" alt="Ícone de agua">'+"A quantidade de agua é:")
    let refri = document.getElementById("refri")
    refri.style.display = "inline-block"
    refri.innerHTML = ('<img src="./images/icone_refrigerante.png" alt="Ícone de refrigerante">'+"A quantidade de refrigerante é:")
    let cerveja = document.getElementById("cerveja")
    cerveja.style.display = "inline-block"
    cerveja.innerHTML = ('<img src="./images/icone_cerveja.png" alt="Ícone de cerveja">'+"A quantidade de cerveja é:")
}

function atualizarPag(){
    limparPag()
    let carne = document.getElementById("carne")
    carne.style.display = "inline-block"
    carne.innerHTML += (" "+qtdCarne+" quilos")
    let agua = document.getElementById("agua")
    agua.style.display = "inline-block"
    agua.innerHTML += (" "+qtdAgua+" garrafas de 2L")
    let refri = document.getElementById("refri")
    refri.style.display = "inline-block"
    refri.innerHTML += (" "+qtdRefri+" garrafas de 2L")
    let cerveja = document.getElementById("cerveja")
    cerveja.style.display = "inline-block"
    cerveja.innerHTML += (" "+qtdCerveja+" latas de 300ml")
}
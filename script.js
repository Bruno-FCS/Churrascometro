var qtdCarne
var qtdAgua
var qtdRefri
var qtdCerveja

function calcular(){
    let nAdultos = parseFloat(document.getElementById("nAdultos").value)
    let nCriancas = parseFloat(document.getElementById("nCriancas").value)
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
    carne.innerHTML = ("A quantidade de carne é:")
    let agua = document.getElementById("agua")
    agua.style.display = "inline-block"
    agua.innerHTML = ("A quantidade de agua é:")
    let refri = document.getElementById("refri")
    refri.style.display = "inline-block"
    refri.innerHTML = ("A quantidade de refrigerante é:")
    let cerveja = document.getElementById("cerveja")
    cerveja.style.display = "inline-block"
    cerveja.innerHTML = ("A quantidade de cerveja é:")
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
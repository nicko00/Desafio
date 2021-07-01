var min = parseInt(document.getElementsByClassName('min')[0].innerHTML)
var sec = parseInt(document.getElementsByClassName('sec')[0].innerHTML)
var contagem = document.getElementsByClassName('aside-diario')[0]
var cont
var inicio = document.getElementById('iniciar')
var intervalo = document.getElementById('intervalo')
var descanso =  document.getElementsByClassName('descanso')[0]

inicio.addEventListener("click", regressiva())
intervalo.addEventListener("click", pausa())
descanso.addEventListener("click", descansar())
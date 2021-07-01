var minDOM = document.getElementsByClassName('min')[0]
var secDOM = document.getElementsByClassName('sec')[0]
var min = parseInt(minDOM.innerHTML)
var sec = parseInt(secDOM.innerHTML)
var contagem = document.getElementsByClassName('aside-diario')[0]
var cont = 0
var inicio = document.getElementById('iniciar')
var intervalo = document.getElementById('intervalo')
var descanso =  document.getElementsByClassName('descanso')[0]

contagem.innerHTML += cont

function regressiva(){
    
}

function pausa(){
    minDOM.innerHTML = '5'
    min = parseInt(minDOM.innerHTML)
}

function descansar(){

}
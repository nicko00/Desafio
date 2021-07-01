var minDOM = document.getElementsByClassName('min')[0].innerHTML
var secDOM = document.getElementsByClassName('sec')[0].innerHTML
var min = parseInt(minDOM)
var sec = parseInt(secDOM)
var contagem = document.getElementsByClassName('aside-diario')[0]
var cont = 0
var inicio = document.getElementById('iniciar')
var intervalo = document.getElementById('intervalo')
var descanso =  document.getElementsByClassName('descanso')[0]

contagem.innerHTML += cont

function regressiva(){
    min = parseInt(minDOM)
    sec = parseInt(secDOM)
    if(min > 0 || sec > 0){
        if(sec == 0){
            sec = 59
            min -= 1
        }
        else{
            sec -= 1
        }
        
        setTimeout(function(){
            regressiva()
        }, 1000)
    }
}

function pausa(){
    minDOM.innerHTML = '5'
    min = parseInt(minDOM.innerHTML)
}

function descansar(){
}
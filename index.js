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

function main(){
    inicio.addEventListener("click", regressiva)
    intervalo.addEventListener("click", pausa)
    descanso.addEventListener("click", descansar)
}

function regressiva(){
    inicio.innerHTML = 'Reiniciar'
    inicio.removeEventListener("click", regressiva)
    inicio.addEventListener("click", reinicio)
    if(min > 0 || sec > 0){
        if(sec == 0){
            sec = 59
            min -= 1
        }
        else{
            sec -= 1
        }
        
        cronometragem = setTimeout(function(){
            if (min > 9){
                document.getElementsByClassName('min')[0].innerHTML = min
            }else{document.getElementsByClassName('min')[0].innerHTML = '0'+min}
            if (sec > 9){
                document.getElementsByClassName('sec')[0].innerHTML = sec
            }else{document.getElementsByClassName('sec')[0].innerHTML = '0'+sec}

            regressiva()
        }, 1000)
    } else{
        document.getElementsByClassName('min')[0].innerHTML = '0'+0
        document.getElementsByClassName('sec')[0].innerHTML = '0'+0
        //audio
        //cont += 1
    }
}

function reinicio(){
    min = 25
    sec = 0
    document.getElementsByClassName('min')[0].innerHTML = 25
    document.getElementsByClassName('sec')[0].innerHTML = "0"+0
    clearTimeout(cronometragem)
    inicio.innerHTML = 'Iniciar Cronômetro'
    inicio.addEventListener("click", regressiva)
    inicio.removeEventListener("click", reinicio)
}

function pausa(){
    document.getElementsByClassName('min')[0].innerHTML = '05'
    document.getElementsByClassName('sec')[0].innerHTML = '00'
    min = 5
    sec = 0
}

function descansar(){
}
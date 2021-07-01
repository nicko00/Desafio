var minDOM = document.getElementsByClassName('min')[0].innerHTML
var secDOM = document.getElementsByClassName('sec')[0].innerHTML
var min = parseInt(minDOM)
var sec = parseInt(secDOM)
var contagem = document.getElementById('contagem')
var cont = 0
var inicio = document.getElementById('iniciar')
var intervalo = document.getElementById('intervalo')
var descanso =  document.getElementsByClassName('descanso')[0]
var som = new Audio("beep.mp3")
var desc = 0 //apenas para que o aviso de descanso não seja exibido várias vezes

contagem.innerHTML = cont

function main(){
    inicio.addEventListener("click", regressiva)
    intervalo.addEventListener("click", pausa)
    descanso.addEventListener("click", descansar)
}

function regressiva(){ //todas as funções retornam para essa que faz a cronometragem de tempo
    inicio.innerHTML = 'Reiniciar'
    inicio.removeEventListener("click", regressiva)
    inicio.addEventListener("click", reinicio)
    if (min == 25) cont++ //verifica se é uma tarefa (25min) ou não, para não adicionar um descanso ou intervalo como +1 pomodoro.

    if(min > 0 || sec > 0){//back-end do cronômetro
        if(sec == 0){
            sec = 59
            min--
        }
        else{
            sec--
        }
        
        cronometragem = setTimeout(function(){//front-end do cronômetro
            if (min > 9){
                document.getElementsByClassName('min')[0].innerHTML = min
            }else{document.getElementsByClassName('min')[0].innerHTML = '0'+min}
            if (sec > 9){
                document.getElementsByClassName('sec')[0].innerHTML = sec
            }else{document.getElementsByClassName('sec')[0].innerHTML = '0'+sec}

            regressiva()
        }, 1)
    } else{
        document.getElementsByClassName('min')[0].innerHTML = '0'+0
        document.getElementsByClassName('sec')[0].innerHTML = '0'+0 // quando acabar a contagem, tudo vai se tornar 00 e não uma div vazia 
        som.play() //som de beep
        contagem.innerHTML = cont //apenas depois de verificar se é tarefa e do cronômetro chegar a 0, será +1 pomodoro
        if (cont == 4 && desc == 0) descanso.style.display = 'block' //aparecer aviso de descanso depois de 4 pomodoros
    }
}

function reinicio(){
    min = 25
    sec = 0
    document.getElementsByClassName('min')[0].innerHTML = 25
    document.getElementsByClassName('sec')[0].innerHTML = "0"+0
    clearTimeout(cronometragem) // para voltar para o minuto 25 e ele não comece a contagem sozinho devido ao setTimeout na regressiva()
    inicio.innerHTML = 'Iniciar Cronômetro'
    inicio.removeEventListener("click", reinicio)
    inicio.addEventListener("click", regressiva)
}

function pausa(){
    document.getElementsByClassName('min')[0].innerHTML = '05'
    document.getElementsByClassName('sec')[0].innerHTML = '00'
    min = 5
    sec = 0
    inicio.innerHTML = 'Iniciar Cronômetro'
    inicio.removeEventListener("click", reinicio)
    inicio.addEventListener("click", regressiva) //remove e add listeners para quando clicar em iniciar cronômetro os minutos não voltarem para 25
}

function descansar(){
    min = 10
    sec = 0
    desc++
    document.getElementsByClassName('min')[0].innerHTML = 10
    document.getElementsByClassName('sec')[0].innerHTML = "0"+0
    inicio.removeEventListener('click', reinicio)
    inicio.addEventListener('click', regressiva)
    inicio.innerHTML = 'Iniciar Cronômetro'
    descanso.innerHTML = 'Aproveite o descanso e boa sorte nas tarefas :)'
    setTimeout(function(){
        descanso.style.display = 'none'}, 4000) //tempo para ler a mensagem que foi mudada antes do aviso não aparecer mais
}
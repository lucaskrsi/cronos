//Variáveis que comandam o tempo
let min = 0;
let seg = 0;
let milisec = 0;
let tempo = 10;

//seletores dos elementos que terão algum evento ou mudança
let m = document.querySelector('#m');
let s = document.querySelector('#s');
let ms = document.querySelector('#ms');
let btnStart = document.querySelector('#start');
let btnPause = document.querySelector('#pause');
let btnStop = document.querySelector('#stop');

//Variável do temporizador (setInterval())
let clock;

//Função para acrescentar o tempo na formatação adequada
function acrescenta(e, x) {
    if (x < 10) {
        e.innerHTML = '';
        e.append('0' + x)
    }
    else {
        e.innerHTML = '';
        e.append(x)
    }
}

//Função que inicia o temporizador
function startTimer() {
    //Controle de dos botões
    //Ps: esse tipo de botão me lembra os antigos aparelhos de Rádio Toca-Fitas
    btnStart.setAttribute('disabled', 'disabled');
    btnPause.removeAttribute('disabled');
    btnStop.removeAttribute('disabled');

    clock = setInterval(() => {
        acrescenta(ms, milisec);
        if(milisec===99){
            milisec = 1;
            seg++
        }
        acrescenta(s, seg);
        if(seg > 59){
            seg = 0;
            acrescenta(s, seg);
            min++
        }
        acrescenta(m, min);
        if(min > 59){
            stopTimer();
        }
        milisec++
    }, tempo)
}

//Função para pausar o Cronômetro
function pauseTimer() {
    clearInterval(clock);
    btnPause.setAttribute('disabled', 'disabled');
    btnStart.removeAttribute('disabled');
}

//Função para resetar o cronômetro
//Ps: diferente dos cronômetros normais eu fiz essa para parar e pausar porque acho muito ruim as que reiniciam e já voltam a contar
function stopTimer() {
    clearInterval(clock);
    milisec = 0;
    min = 0;
    seg = 0;
    tempo = 10;
    acrescenta(ms, milisec);
    acrescenta(s, seg);
    acrescenta(m, min);
    btnStop.setAttribute('disabled', 'disabled');
    btnPause.setAttribute('disabled', 'disabled');
    btnStart.removeAttribute('disabled');
}
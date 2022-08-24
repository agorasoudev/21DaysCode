
var tempo = 600; // 10 minutos

function start() {

    cron = setInterval(() => {timer();}, 1000);

};

function pause () {

    clearInterval(cron);

};

function stop() { //parar o contador e zerar o contador
    clearInterval(cron);
    tempo = 600;
    document.getElementById("counter").innerText = "00:00";
};

function timer() {

    let min = Math.floor(tempo/60);
    let segundosRestantes = tempo % 60;

    if (segundosRestantes <10){
        segundosRestantes = "0" + segundosRestantes;
    }

    if (min < 10){
        min = "0" + min;
    }

    document.getElementById("counter").innerText = min + ":" + segundosRestantes;

    if (tempo > 0) {
        tempo = tempo -1;
    } else {
        document.getElementById("counter").innerText = "00:00";
    }
};

// Escrever no html o histórico de contadores

function historicoContagem () {

   if (timer == 0){
       document.getElementById("historico").innerHTML = "BREAK 1 : 00:00";
   }  
};


const count = document.getElementById("counter");

//Chamar a função histoicoContagem







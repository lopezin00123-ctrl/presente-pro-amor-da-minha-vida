// DATA DO INÍCIO DO NAMORO
const inicio = new Date(2026, 9, 12, 0, 0, 0);

// BOTÃO DE ABERTURA
const botao = document.getElementById("botaoAbrir");

botao.addEventListener("click", function() {

    document.getElementById("inicio").style.display = "none";

    const presente = document.getElementById("presente");

    presente.classList.remove("escondido");

    atualizarCronometro();
});

// CRONÔMETRO
function atualizarCronometro() {

    const agora = new Date();

    let anos = agora.getFullYear() - inicio.getFullYear();

    let aniversario = new Date(
        inicio.getFullYear() + anos,
        inicio.getMonth(),
        inicio.getDate()
    );

    if (agora < aniversario) {
        anos--;

        aniversario = new Date(
            inicio.getFullYear() + anos,
            inicio.getMonth(),
            inicio.getDate()
        );
    }

    const diferenca = agora - aniversario;

    const dias = Math.floor(diferenca / 86400000);

    const horas = Math.floor(
        (diferenca % 86400000) / 3600000
    );

    const minutos = Math.floor(
        (diferenca % 3600000) / 60000
    );

    const segundos = Math.floor(
        (diferenca % 60000) / 1000
    );

    document.getElementById("years").textContent = anos;
    document.getElementById("days").textContent = dias;
    document.getElementById("hours").textContent = horas;
    document.getElementById("minutes").textContent = minutos;
    document.getElementById("seconds").textContent = segundos;
}

// ATUALIZA A CADA SEGUNDO
atualizarCronometro();

setInterval(atualizarCronometro, 1000);
const musica = document.getElementById("musica");
const botaoMusica = document.getElementById("botaoMusica");

botaoMusica.addEventListener("click", function() {
    if (musica.paused) {
        musica.play();
        botaoMusica.textContent = "⏸ Pausar música";
    } else {
        musica.pause();
        botaoMusica.textContent = "▶ Tocar nossa música";
    }
});
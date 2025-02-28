const yesBtn = document.querySelector('#yesBtn');

   
yesBtn.addEventListener('click', function () {
    // Crear un nuevo objeto de audio
    let audio = new Audio('media/taylor.mp3');
    
    // Reproducir el audio
    audio.play();

    // Cuando el audio termine, volver a reproducirlo
    audio.addEventListener('ended', function () {
        this.currentTime = 0; // Reiniciar el tiempo del audio
        this.play(); // Reproducir nuevamente
    });
});
const noBtn = document.querySelector('#noBtn');
let moveCount = 0; // Contador de movimientos

noBtn.addEventListener('mouseover', function () {
    if (moveCount < 2) {
        // Genera posiciones aleatorias
        const randomY = parseInt(Math.random() * 100);
        const randomX = parseInt(Math.random() * 100);

        // Aplica nuevas posiciones al botón
        noBtn.style.setProperty('top', randomY + '%');
        noBtn.style.setProperty('left', randomX + '%');
        noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
        
        // Incrementa el contador
        moveCount++;
    } else {
        // Cambia el texto a "BOT" después de dos movimientos
        noBtn.textContent = "BOT";
        const randomY = parseInt(Math.random() * 100);
        const randomX = parseInt(Math.random() * 100);

        // Aplica nuevas posiciones al botón
        noBtn.style.setProperty('top', randomY + '%');
        noBtn.style.setProperty('left', randomX + '%');
        noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
    }
});
score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() =>{
    audio.play();
},1000);
document.onkeydown = function (e) {
    console.log("key cocde is:", e.keyCode);
    if (e.keyCode == 38) {
        poke = document.querySelector('.poke');
        poke.classList.add('animatePoke');
        setTimeout(() => {
            poke.classList.remove('animatePoke');
        }, 700);
    }

    if (e.keyCode == 39) {
        poke = document.querySelector('.poke');
        pokeX = parseInt(window.getComputedStyle(poke, null).getPropertyValue('left'));
        poke.style.left = pokeX + 112 + "px";
    }
    if (e.keyCode == 37) {
        poke = document.querySelector('.poke');
        pokeX = parseInt(window.getComputedStyle(poke, null).getPropertyValue('left'));
        poke.style.left = (pokeX - 112) + "px";
    }
}

setInterval(() => {
    poke = document.querySelector('.poke');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(poke, null).getPropertyValue('left'));

    dy = parseInt(window.getComputedStyle(poke, null).getPropertyValue('bottom'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    console.log(offsetX, offsetY);

    if (offsetX < 52 && offsetY < 34) {
        gameOver.innerHTML = 'Game Over - Reload to start over';
        obstacle.classList.remove('obstacleAni');
       audiogo.play();
        setTimeout(() =>{
           audiogo.pause();
           audio.pause();
        },1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('new animation duration', newDur);
        }, 500);


    }


}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "your Score" + score;
} 

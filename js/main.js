const light = document.querySelector('#light3');

function flicker() {

        const opacity = 0.3 + Math.random() * 0.2; // 0.4 → 0.6
        light.style.background = `radial-gradient(
        ellipse at top,
        rgba(255,255,200,${opacity}) 0%,
        rgba(255,255,200,0) 80%
    )`;

}

setInterval(flicker, 100);
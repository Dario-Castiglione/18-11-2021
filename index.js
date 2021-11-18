const player = document.querySelector(".player")
player.style.background="transparent url('./frontidle.png') 0 0 no-repeat"
//player.style.animation ="sidemove 1s steps(12) infinite"
player.style.animation ="idle 1s steps(9) infinite"

/*
player.style.background="transparent url('./upidle.png') 0 0 no-repeat"
player.style.animation ="upidle 0.5s steps(4) infinite"
player.style.transform = ""


player.style.background="transparent url('./frontidle.png') 0 0 no-repeat"
player.style.animation ="idle 1s steps(9) infinite"
player.style.transform = ""


player.style.background="transparent url('./sideidle.png') 0 0 no-repeat"
player.style.animation ="upidle 1s steps(4) infinite"
player.style.transform = ""


*/










let lastState= "";
let x = 0;
let y= 0;
document.addEventListener("keydown",()=>{
    console.log(event)
    switch (event.keyCode) {
        case 87:
            player.style.background="transparent url('./upmove.png') 0 0 no-repeat"
            player.style.animation ="upmove 1s steps(12) infinite"
            player.style.transform = ""
            lastState = "up"
            player.style.top=`${x-= 5}px`
            break;
        case 83:
            player.style.background="transparent url('./downmove.png') 0 0 no-repeat"
            player.style.animation ="downmove 1s steps(13) infinite"
            player.style.transform = ""
            player.style.top=`${x+= 5}px`
            lastState = "down"
            break;
        case 68:
            player.style.background="transparent url('./side.png') 0 0 no-repeat"
            player.style.animation ="sidemove 1s steps(12) infinite"
            player.style.transform = ""
            player.style.left=`${y+= 5}px`
            lastState = "right";
            break;
        case 65:
            player.style.background="transparent url('./side.png') 0 0 no-repeat"
            player.style.animation ="sidemove 1s steps(12) infinite"
            player.style.transform = "rotatey(180deg)"
            player.style.left=`${y-= 5}px`
            lastState = "left";
    
        default:
            break;
    }



})

document.addEventListener("keyup",()=>{
    console.log(event)
    switch (event.keyCode) {
        case 87:
            player.style.background="transparent url('./upidle.png') 0 0 no-repeat"
            player.style.animation ="upidle 0.8s steps(4) infinite"
            player.style.transform = ""
            lastState = "up"
            break;
        case 83:
            player.style.background="transparent url('./frontidle.png') 0 0 no-repeat"
            player.style.animation ="idle 1s steps(9) infinite"
            player.style.transform = ""
            player.style.top=`${x+= 5}px`
            lastState = "down"
            break;
        case 68:
            player.style.background="transparent url('./sideidle.png') 0 0 no-repeat"
            player.style.animation ="upidle 0.5s steps(4) infinite"
            player.style.transform = ""
            lastState = "right";
            break;
        case 65:
            player.style.background="transparent url('./sideidle.png') 0 0 no-repeat"
            player.style.animation ="upidle 0.5s steps(4) infinite"
            player.style.transform = "rotatey(180deg)"
            lastState = "left";
    
        default:
            break;
    }



})



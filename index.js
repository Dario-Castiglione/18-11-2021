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
let position = "";
const leftidle = () =>{
    player.style.background="transparent url('./sideidle.png') 0 0 no-repeat"
    player.style.animation ="upidle 0.5s steps(4) infinite"
    player.style.transform = "rotatey(180deg)"
}
const leftmove = () =>{
    player.style.background="transparent url('./side.png') 0 0 no-repeat"
    player.style.animation ="sidemove 1s steps(12) infinite"
    player.style.transform = "rotatey(180deg)"
    player.style.left=`${y-= 5}px`
    position= "left"
    
}
const rightmove = () =>{
    player.style.background="transparent url('./side.png') 0 0 no-repeat"
    player.style.animation ="sidemove 1s steps(12) infinite"
    player.style.transform = ""
    player.style.left=`${y+= 5}px`
    position= "right"
    
}
const rightidle = () =>{
    player.style.background="transparent url('./sideidle.png') 0 0 no-repeat"
    player.style.animation ="upidle 0.5s steps(4) infinite"
    player.style.transform = ""
}
const upmove = () => {
    player.style.background="transparent url('./upmove.png') 0 0 no-repeat"
    player.style.animation ="upmove 1s steps(12) infinite"
    player.style.transform = ""
    player.style.top=`${x-= 5}px`
    position= "up"
}
const upidle = () => {
    player.style.background="transparent url('./upidle.png') 0 0 no-repeat"
    player.style.animation ="upidle 0.8s steps(4) infinite"
    player.style.transform = ""
}
const downmove = () => {
    player.style.background="transparent url('./downmove.png') 0 0 no-repeat"
    player.style.animation ="downmove 1s steps(13) infinite"
    player.style.transform = ""
    player.style.top=`${x+= 5}px`
    position= "down"
}
const downidle = () => {
    player.style.background="transparent url('./frontidle.png') 0 0 no-repeat"
    player.style.animation ="idle 1s steps(9) infinite"
    player.style.transform = ""
    player.style.top=`${x+= 5}px`
}






let lastState= "";
let x = 0;
let y= 0;
document.addEventListener("keydown",()=>{
    switch (event.keyCode) {
        case 87:
            upmove()
            break;
        case 83:
            downmove()
            break;
        case 68:                 
            rightmove();
            break;
        case 65:
            leftmove()
        default:
            break;
    }



})

document.addEventListener("keyup",()=>{
    console.log(event)
    switch (event.keyCode) {
        case 87:
            if (position === "up") upidle()            
            break;
        case 83:
            if (position === "down") downidle()
            break;
        case 68:
            if (position === "right") rightidle()           
            break;
        case 65:
            if (position === "left") leftidle()
        default:
            break;
    }

    console.log(position)

})

document.addEventListener("keydown",()=>{

})


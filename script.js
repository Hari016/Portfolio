// function hamburg(){
//     const navbar = document.querySelector(".dropdown")
//     navbar.style.transform = "translateY(0px)"
// }

// function cancel(){
//     const navbar = document.querySelector(".dropdown")
//     navbar.style.transform = "translateY(-500px)"
// }

// Typewriter Effect

const texts = [
    "DEVELOPER",
    "DESIGNER",
    "STUDENT"
]
let textIndex = 0;
let charcterIndex = 0;

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
let speed  =150;
const textElements = document.querySelector(".typewriter-text");
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
window.onload = typeWriter

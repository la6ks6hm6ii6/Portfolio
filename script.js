const words = [
    "Front-End Developer",
    "Quick Learner",
    "Problem Solver"
];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;
function type(){
    const text = document.getElementById("typing");
    if(!deleting){
        text.textContent = words[wordIndex].substring(0,charIndex++);
    }else{
        text.textContent = words[wordIndex].substring(0,charIndex--);
    }
    if(charIndex===words[wordIndex].length+1){
        deleting=true;
        setTimeout(type,1000);
        return;
    }
    if(charIndex===0 && deleting){
        deleting=false;
        wordIndex=(wordIndex+1)%words.length;
    }
    setTimeout(type,deleting?40:100);
}
window.addEventListener("DOMContentLoaded", type);;

const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>{topBtn.style.display=window.scrollY>300?"flex":"none";
});
topBtn.onclick=()=>{
    window.scrollTo({top:0,behavior:"smooth"
});
}

const button=document.querySelector('button');
const h1=document.querySelector('h1');
h1.style.color="white";
button.addEventListener('click',function(){

    const newcolor=makerandcolor();
    document.body.style.backgroundColor=newcolor;
    h1.innerText=newcolor;
})

const makerandcolor=()=>{
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`
}


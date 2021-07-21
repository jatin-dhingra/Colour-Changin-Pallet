const btn=document.querySelector('#btn');
const h1=document.querySelector('h1');

btn.addEventListener('click',function()
{
    
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    const colorr=`rgb(${r} , ${g} , ${b})`
    document.body.style.backgroundColor=colorr;

    h1.innerHTML=colorr;
})


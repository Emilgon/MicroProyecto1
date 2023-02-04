const carruselSlide=document.querySelector('.carruselslide');
const carruselImages=document.querySelectorAll('.carruselslide img');

//buttons
const prevBtn=document.querySelector('#prevBtn');
const nextBtn=document.querySelector('#nextBtn');

//counter
let counter=1;
const size= carruselImages[0].clientWidth;
carruselSlide.style.transform='translateX(' + (-size * counter) + 'px)';

//btn listeners
nextBtn.addEventListener('click',()=>{
    if(counter>=carruselImages.length -1) return;
    carruselSlide.style.transition="transform 0.4s ease-in-out";
    counter++;
    carruselSlide.style.transform='translateX(' + (-size * counter) + 'px)';
});
prevBtn.addEventListener('click',()=>{
    if(counter<=0) return;
    carruselSlide.style.transition="transform 0.4s ease-in-out";
    counter--;
    carruselSlide.style.transform='translateX(' + (-size * counter) + 'px)';
});

carruselSlide.addEventListener('transitionend',()=>{
    if(carruselImages[counter].id==='lastClone'){
        carruselSlide.style.transition="none";
        counter=carruselImages.length -2;
        carruselSlide.style.transform='translateX(' + (-size * counter) + 'px)';
    }
    if(carruselImages[counter].id==='firstClone'){
        carruselSlide.style.transition="none";
        counter=carruselImages.length - counter;
        carruselSlide.style.transform='translateX(' + (-size * counter) + 'px)';
    }
});








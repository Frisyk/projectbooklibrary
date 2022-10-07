const navbar = document.getElementById('nav');
const rounder = document.querySelector('.rounder');
const li = document.querySelectorAll('li');
const menu =document.getElementById('menu')
const ul = document.getElementById('ul');

rounder.addEventListener('click', function(){
    window.scroll({top: 0, left: 0, behavior:"smooth"});
});

for (const el of li) {
    el.addEventListener('click', function(){
        ul.classList.remove('slide')
    })
};

menu.addEventListener('click', () => ul.classList.toggle('slide'));
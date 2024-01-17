var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-bnt i');

function menuShow() {
    if (ul.classList.contains('open')){
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}
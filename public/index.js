const body = document.querySelector('body'),
darkmode = document.querySelector('#chk'),
nav = Array.from(document.getElementsByClassName('nav__link'));

darkmode.addEventListener('click',()=>{
    if(body.classList.contains('dark')){
        body.classList.remove('dark');
    }
    else{
        body.classList.add('dark');
    }
});

function removeactive(){
    nav.forEach(ele => {
        ele.classList.remove('active-link');
    })
}

window.addEventListener('scroll',()=>{
    let height = 0 - document.documentElement.getBoundingClientRect().top;
    removeactive();
    if(height < 440){
        nav[0].classList.add('active-link');
    }
    else if(height < 1080){
        nav[1].classList.add('active-link');
    }
    else if(height < 1680){
        nav[2].classList.add('active-link');
    }
    else if(height < 2999){
        nav[3].classList.add('active-link');
    }
    else if(height < 3580){
        nav[4].classList.add('active-link');
    }
    else{
        nav[5].classList.add('active-link');
    }
});

const sound = new Audio();

window.onclick = function playSound() {
    sound.src = '/my_files/my_portfolio_files/audio/click_sound.mp3';
    sound.play();
}


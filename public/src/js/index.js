const body = document.querySelector('body'),
    lightmode = document.querySelector('#chk'),
    nav = Array.from(document.getElementsByClassName('nav__link')),
    root = document.documentElement,
    workCard = document.querySelectorAll('.work__card'),
    workItem = document.querySelectorAll('.work__item'),
    Github_img = document.querySelector('.about__Github_imgBox'),
    sound = new Audio();

document.addEventListener("DOMContentLoaded", ready);
function ready() {
    document.querySelector('body').children[0].style.display = 'block';
    document.querySelector('body').children[1].style.display = 'block';
    document.querySelector('body').children[2].style.display = 'block';
}

lightmode.addEventListener('click', () => {
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        root.style.setProperty('--text-color', '#cdc7c7');
    }
    else {
        body.classList.add('light');
        root.style.setProperty('--text-color', '#797575');
    }
});

function getIDheight(id) {
    const elem_height = document.getElementById(id).offsetTop;
    return elem_height;
}

function removeactive() {
    nav.forEach(ele => {
        ele.classList.remove('active-link');
    })
}

window.addEventListener('scroll', () => {
    let height = 0 - document.documentElement.getBoundingClientRect().top;
    removeactive();
    if (height > getIDheight('contact') - 300) {
        nav[4].classList.add('active-link');
    }
    else if (height > getIDheight('work') - 300) {
        nav[3].classList.add('active-link');
    }
    else if (height > getIDheight('skills') - 300) {
        nav[2].classList.add('active-link');
    }
    else if (height > getIDheight('about') - 200) {
        nav[1].classList.add('active-link');
    }
    else {
        nav[0].classList.add('active-link');
    }
});

workItem.forEach(ele => {
    ele.addEventListener('click', () => {
        workItem.forEach(ele => {
            ele.classList.remove('active-work');
        })
        ele.classList.add('active-work');
        workCard.forEach(card => {
            card.classList.remove('active-work-card');
        });
        setTimeout(() => {
            workCard.forEach(card => {
                if (card.classList.contains(ele.id)) {
                    card.classList.add('active-work-card');
                }
            });
        }, 10);
    });
});

window.onload = () => {
    Github_img.children[0].attributes[0].value = 'https://github-readme-stats.vercel.app/api?username=Antriksh1305&show_icons=true&bg_color=241e20&text_color=ffffff&title_color=7dba78&icon_color=7dba78&hide_border=true&border_radius=18&cache_seconds=84000';
}

window.onclick = function () {
    sound.src = '/public/assets/audio/click_sound.mp3';
    sound.play();
}
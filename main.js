// change the navbar styles on scroll

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// show and hidw faq
const faqs  = document.querySelectorAll('.faq')
faqs.forEach(faq=>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');

        // Change icon
        const icon = faq.querySelector('.faq_icon');
        if(icon.className === 'faq_icon fa-solid fa-plus'){
            icon.className = 'faq_icon fa-solid fa-minus'
        }else{
            icon.className = 'faq_icon fa-solid fa-plus';
        }
    })


})

const menu = document.querySelector('.nav__menu');
const closeBtn = document.querySelector('#close-menu-btn');
const openMenu = document.querySelector('#open-menu-btn');

openMenu.addEventListener("click", ()=>{
    menu.style.display ="flex";
    closeBtn.style.display ="inline-block";
    openMenu.style.display = "none";
    
})

// close nav
const closeNav = ()=>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    openMenu.style.display = 'inline-block';

}

closeBtn.addEventListener('click', closeNav)
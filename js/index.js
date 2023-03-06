const menuBtn = document.getElementById('menu-close-btn');
const menuSection = document.querySelector('section.mobile-menu');
menuBtn.addEventListener('click', function(){
    menuSection.classList.add('visible');
    
})


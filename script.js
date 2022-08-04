const bar = document.querySelector('.bar');
const nav = document.querySelector('.nav-items');
const mobile = document.querySelector('.mobile');
const close = document.querySelector('.close');



// Click event on Hamburger menu

bar.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.add('active');
    mobile.style.opacity ='0';

})

// Click event on Close icon

close.addEventListener('click', function (e) {
    e.preventDefault();
    mobile.style.opacity ='1';
    // mobile.style.display = 'block';
    nav.classList.remove('active');
    
})
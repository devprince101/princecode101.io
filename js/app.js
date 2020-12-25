// Declaration
const iconButton = document.querySelector('#Icon_button');
const navLinks = document.querySelectorAll('.nav_link');

iconButton.addEventListener('click',()=>{
    document.body.classList.toggle('ShowNavbar');
})
navLinks.forEach(link =>{
    link.addEventListener('click',()=>{
        document.body.classList.remove('ShowNavbar');  
    })
})
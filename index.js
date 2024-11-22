document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector(".fa-bars");
    const navLinks = document.querySelector(".hamburger_list");
    const newNavBar = document.querySelector(".hamburger_menu");

    hamburgerMenu.addEventListener('click', () =>{
        navLinks.classList.toggle('show');
        hamburgerMenu.classList.toggle('toggle');
        newNavBar.classList.toggle('toggle');
    })
})
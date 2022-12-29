let nav_menu = document.getElementById('menu');
let nav_link = document.getElementById('nav_Links');

nav_menu.onclick = () =>{
    nav_link.classList.toggle('show_nav');
}
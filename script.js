let toggleNav = document.querySelector('nav');

function toggleSidebar(){
   toggleNav.classList.toggle('show')
   document.body.classList.toggle('overlay');
   console.log('clicked');
   
}
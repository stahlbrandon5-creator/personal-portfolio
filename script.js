const buttons = document.querySelectorAll('.show-more');
const menuItems = document.querySelectorAll('.menu-item');

buttons.forEach(function(button) {
    button.addEventListener('click', () => {
        const contentList  = button.closest('.content-list');
        const toggleItems = contentList.querySelectorAll(".toggle");
        
        let isToggled = false;

        toggleItems.forEach(function(item) {   
            isToggled = item.classList.toggle("hidden");
            
        });

        button.textContent = isToggled ? 'Show more ▼' : 'Show less ▲' ;
    });
});

menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', () => {
        const id = menuItem.getAttribute("href");
        const element = document.querySelector(id);
        element.scrollIntoView({ behavior: "smooth", block: "center"});
    });
});
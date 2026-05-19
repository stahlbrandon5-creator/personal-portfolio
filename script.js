const buttons = document.querySelectorAll('.show-more');
const nav_links = document.querySelectorAll('content-list');

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

nav_links.forEach(function(link) {
    link.addEventListener('click', (event) => {
        link.scrollIntoView({behavior: "smooth"});
        event.preventDefault();
    });
});

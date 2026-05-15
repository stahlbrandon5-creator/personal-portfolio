const buttons = document.querySelectorAll('.show-more');

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
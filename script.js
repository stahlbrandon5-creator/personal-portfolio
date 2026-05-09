document.querySelector('.show-more')
document.querySelectorAll('show-more')

GamepadButton.addEventListener('click', function() {

});

const buttons = document.querySelectorAll('.show-more');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        console.log('Button clicked!');
    });
});
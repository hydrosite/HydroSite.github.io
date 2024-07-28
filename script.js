// Example: Adding a simple alert effect on button click
document.querySelectorAll('.button, .link-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Button ' + button.textContent + ' clicked!');
    });
});

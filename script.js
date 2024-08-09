document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation (you should implement a more secure authentication system)
    if (username && password) {
        localStorage.setItem('signedInUser', username);
        window.location.href = 'index.html'; // Redirect to homepage or another page
    } else {
        document.getElementById('message').textContent = 'Please enter both username and password.';
    }
});

// Check if the user is signed in on page load
window.onload = function() {
    if (localStorage.getItem('signedInUser')) {
        document.getElementById('signInForm').style.display = 'none';
        document.getElementById('message').textContent = `Welcome back, ${localStorage.getItem('signedInUser')}!`;
    }
};

if (!localStorage.getItem('signedInUser')) {
    document.getElementById('restrictedMessage').textContent = 'Please sign in to access this content.';
    document.getElementById('home').style.display = 'none'; // Hide content if not signed in
}

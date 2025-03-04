document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const letters = document.getElementById('letters').value;
    const numbers = document.getElementById('numbers').value;
    const symbols = document.getElementById('symbols').value;

    fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            letters: parseInt(letters),
            numbers: parseInt(numbers),
            symbols: parseInt(symbols),
        }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('passwordResult').innerText = `Generated Password: ${data.password}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
fetch('https://shantodey.github.io/random_password_generator/', {
    // ...
});

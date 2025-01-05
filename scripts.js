document.getElementById('nda-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('full-name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const age = parseInt(document.getElementById('age').value.trim(), 10);
    const phoneNumber = document.getElementById('phone-number').value.trim();

    if (fullName && surname && age >= 18 && phoneNumber) {
        // Simulate saving the data (replace this with your backend integration)
        console.log({ fullName, surname, age, phoneNumber });

        // Redirect to the portfolio
        window.location.href = 'https://griffin71.github.io/myPortfolioBETA/';
    } else {
        alert('Please fill out all fields correctly.');
    }
});

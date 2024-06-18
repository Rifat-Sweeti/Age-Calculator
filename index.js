function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;

    if (!birthdate) {
        alert('Please select your birthdate.');
        return;
    }

    const today = new Date();
    const birthDate = new Date(birthdate);

    let age = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        age--;
        months += 12;
    }

    if (days < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days = lastMonth.getDate() - birthDate.getDate() + today.getDate();
        months--;
    }

    const ageDisplay = document.getElementById('ageDisplay');
    ageDisplay.innerHTML = `
        <p><strong>Your age:</strong></p>
        <p><strong>Years:</strong> ${age}</p>
        <p><strong>Months:</strong> ${months}</p>
        <p><strong>Days:</strong> ${days}</p>
        <hr>
        <p><strong>Birthdate:</strong> ${birthdate}</p>
    `;
}

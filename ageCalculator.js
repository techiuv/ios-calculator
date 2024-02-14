const calculate = document.getElementById('calculate');
const bDate = document.getElementById('b-date');

// JavaScript for age calculation
function calculateAge() {
    if (bDate.value !== '') {
        let birthDate = new Date(bDate.value);
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        let monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }    
        let result = document.querySelector('.result');
        result.innerHTML = `<span id="result">You are <span id="age-result">${age}</span> years old.</span>`;
        bDate.value = '';
    } 
}

calculate.addEventListener('click', calculateAge);

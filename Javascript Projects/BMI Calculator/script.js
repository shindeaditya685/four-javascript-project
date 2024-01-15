const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value); // when we select value from form it will in string we have to pasre it into INT.



form.addEventListener('submit', function(e) {
    e.preventDefault(); // dont submit

    const height = parseInt(document.querySelector('#height').value); // when we select value from form it will in string we have to pasre it into INT.
    const weight = parseInt(document.querySelector('#weight').value); // when we select value from form it will in string we have to pasre it into INT.
    const results = document.querySelector('#results');
    const bmiResult = document.querySelector('#bmi-result');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        // show the result
        results.innerHTML = `<span>${bmi}</span>`;

        if (bmi < 18.6) {
            bmiResult.innerHTML = '<span>Under Weight</span>';
        } else if (bmi > 18.6 && bmi < 24.9) {
            bmiResult.innerHTML = '<span>Normal Weight</span>';
        } else {
            bmiResult.innerHTML = '<span>Over Weight</span>';
        }
    }

    
    
})
const convertBtn = document.querySelector('#convert-btn');
const inputEl = document.querySelector('#number-input')
const lengthEl = document.querySelector("#length-el");
const volumeEL = document.querySelector("#volume-el");
const massEl = document.querySelector("#mass-el");



convertBtn.addEventListener('click', ()=>{
    const unit = Number(inputEl.value);

    const metersToFeet = metersToFeetConversion(unit);
    const feetToMeters = feetToMetersConversion(unit)
    lengthEl.textContent = `${unit} meters = ${metersToFeet} feet | 
                            ${unit} feet = ${feetToMeters} meters`

    const litersToGallons = litersToGallonsConversion(unit);
    const gallonsToLiters = gallonsToLitersConversion(unit)
    volumeEL.textContent = `${unit} litres = ${litersToGallons} gallons | 
                            ${unit} gallons = ${gallonsToLiters} litres`

    const kilosToPounds = kilosToPoundsConversion(unit);
    const poundsToKilos = poundsToKilosConversion(unit)
    massEl.textContent = `${unit} kilos = ${kilosToPounds} pounds | 
                          ${unit} pounds = ${poundsToKilos} kilos`




})


function metersToFeetConversion (unit) {
    return (unit * 3.28084.toFixed(3));
}

function feetToMetersConversion (unit){
    return (unit * 0.3048).toFixed(3);
}

function litersToGallonsConversion (unit){
    return (unit * 0.264172).toFixed(3);
}

function gallonsToLitersConversion (unit){
    return (unit * 3.785412).toFixed(3);
}

function kilosToPoundsConversion (unit){
    return (unit * 2.2046).toFixed(3);
}

function poundsToKilosConversion (unit){
    return (unit/2.2046).toFixed(3)
}

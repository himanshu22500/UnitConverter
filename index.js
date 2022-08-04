let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")

const lengthEl = document.getElementById("converted-val-length")
const volumeEl = document.getElementById("converted-val-volume")
const massEl = document.getElementById("converted-val-mass")

convertBtn.addEventListener("click", function(){
    const inputValue = Number(inputEl.value)
    convertLength(inputValue)
    convertVolume(inputValue)
    convertMass(inputValue)
})

function convertLength(val){
    let meter = feetToMeter(val)
    let feet = meterToFeet(val)
    render("meters",feet,"feet",meter, lengthEl, val)
}

function meterToFeet(meter){
    let feet = (meter*3.281).toFixed(3)
    return feet
}

function feetToMeter(feet){
    let meter = (feet/3.281).toFixed(3)
    return meter
}



function convertVolume(val){
    let gallon = literToGallon(val)
    let liter = gallonToLiter(val)
    render("liters",gallon, "gallons",liter,volumeEl, val)
}

function literToGallon(liter){
    let gallon = (liter*0.264).toFixed(3)
    return gallon
}

function gallonToLiter(gallon){
    let liter = (gallon/0.264).toFixed(3)
    return liter
}

function convertMass(val){
    let kilos = poundTokilo(val)
    let pounds = kiloToPound(val)
    render("kilos",pounds,"pounds",kilos, massEl, val)
}

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function poundTokilo(pound){
    let kilos = (pound/2.204).toFixed(3)
    return kilos
}

function kiloToPound(kilos){
    let pound = (kilos*2.204).toFixed(3)
    return pound
}


function render(unit1, val1,unit2, val2, element, inputValue){
    element.textContent = `
        ${inputValue} ${unit1} = ${val1} ${unit2} | ${inputValue} ${unit2} = ${val2} ${unit1}
    `
}


const oneMeter = 3.281 // ft
const oneLiter = 0.264 // gallon
const oneKilo = 2.204 // pounds

let inputUnit = document.getElementById("input-unit")
let lengthOutput = document.getElementById("length-output")
let volumeOutput = document.getElementById("volume-output")
let massOutput = document.getElementById("mass-output")

let convertBtn = document.getElementById("convert-btn")
convertBtn.addEventListener("click", function() {
	let inputValue = Number(inputUnit.value)
	
	lengthOutput.textContent = `${inputValue} meters = ${(inputValue * oneMeter).toFixed(2)} feet | ${inputValue} feet = ${(inputValue / oneMeter).toFixed(2)} meters`
	volumeOutput.textContent = `${inputValue} liters = ${(inputValue * oneLiter).toFixed(2)} gallons | ${inputValue} gallons = ${(inputValue / oneLiter).toFixed(2)} liters`
	massOutput.textContent = `${inputValue} kilograms = ${(inputValue * oneKilo).toFixed(2)} pounds | ${inputValue} pounds = ${(inputValue / oneKilo).toFixed(2)} kilograms`
})

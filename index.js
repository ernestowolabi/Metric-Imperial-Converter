/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/





function convert() {
  let enteredValue = document.getElementById("input").value
  let feetResult = (enteredValue * 3.281).toFixed(3)
  let meterResult = (enteredValue / 3.281).toFixed(3)
  let literResult = (enteredValue / 0.264).toFixed(3)
  let gallonResult = (enteredValue * 0.264).toFixed(3)
  let kgResult = (enteredValue * 2.204).toFixed(3)
  let poundResult = (enteredValue / 2.204).toFixed(3)


    localStorage.setItem("length", `${enteredValue} meters = ${feetResult} feet | ${enteredValue} feet = ${meterResult} meters`)

    localStorage.setItem("volume", `${enteredValue} liters = ${gallonResult} gallons | ${enteredValue} gallons = ${literResult} liters`)

    localStorage.setItem("mass", `${enteredValue} Kgs = ${poundResult} pounds | ${enteredValue} pounds = ${kgResult} Kgs`)

    document.getElementById("length-result").innerHTML = localStorage.getItem("length")
    
    document.getElementById("volume-result").innerHTML = localStorage.getItem("volume")
  
    document.getElementById("mass-result").innerHTML = localStorage.getItem("mass")
}

if(document.getElementById("length-result").innerHTML === "") {
  document.getElementById("length-result").innerHTML = localStorage.getItem("length")
}

if(document.getElementById("volume-result").innerHTML === "") {
  document.getElementById("volume-result").innerHTML = localStorage.getItem("volume")
}

if(document.getElementById("mass-result").innerHTML === "") {
  document.getElementById("mass-result").innerHTML = localStorage.getItem("mass")

}


function clearInput() {
  document.getElementById("input").value = ""
  document.getElementById("length-result").textContent = ""
  document.getElementById("volume-result").textContent = ""
  document.getElementById("mass-result").textContent = ""

  localStorage.clear()


}

let convertBtn = document.getElementById("convert-btn")


convertBtn.addEventListener("click", convert)


let resetBtn = document.getElementById("reset-btn")

resetBtn.addEventListener("click", clearInput)

















function changeFeettoMeters(feet) {
    feet = parseFloat(feet)
    document.getElementById("outputMeters").innerHTML = feet * 0.305
}

function changeMeterstoFeet(meters) {
    meters = parseFloat(meters)
    document.getElementById("outputFeet").innerHTML = meters * 3.279
}

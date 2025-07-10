function convertTemp(){
    const inputTemp =parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    if (isNaN(inputTemp)) {
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }
    let celsius;
    switch(fromUnit) {
        case "Celsius":
            celsius = inputTemp;
            break;
        case "Fahrenheit":
            celsius = (inputTemp - 32) * 5/9;
            break;
        case "Kelvin":
            celsius = inputTemp - 273.15;
            break;
        default:
            document.getElementById("result").innerText = "Invalid unit.";
            return;
    }

    let result;
    switch(toUnit) {
        case "Celsius":
            result = celsius;
            break;
        case "Fahrenheit":
            result = (celsius * 9/5) + 32;
            break;
        case "Kelvin":
            result = celsius + 273.15;
            break;
        default:
            document.getElementById("result").innerText = "Invalid unit.";
            return;
    }

    document.getElementById("result").textContent = `${inputTemp}°${fromUnit.charAt(0).toUpperCase()} = ${result.toFixed(2)}°${toUnit.charAt(0).toUpperCase()}`;
}

function converter() {

    let tempEmCelsiusValor = document.getElementById("tempEmCelsius").value;
    let tempEmKelvinValor = document.getElementById("tempEmKelvin").value;
    let tempEmFahrenheitValor = document.getElementById("tempEmFahrenheit").value;

    var celsiusParaFahrenheit = 9 / 5;
    var fahrenheitParaCelsius = 5 / 9;
    var celsiusParaKelvin = 273.15;

    if (tempEmKelvinValor == "" && tempEmFahrenheitValor == "") {
        tempEmKelvinValor = tempEmCelsiusValor * 1 + celsiusParaKelvin;
        tempEmFahrenheitValor = (tempEmCelsiusValor * celsiusParaFahrenheit + 32).toFixed(2);
    } else if (tempEmCelsiusValor == "" && tempEmFahrenheit == "") {
        tempEmCelsiusValor = (tempEmKelvinValor * 1 - celsiusParaKelvin).toFixed(2);
        tempEmFahrenheitValor = (tempEmCelsiusValor * celsiusParaFahrenheit + 32).toFixed(2);
    } else if (tempEmCelsiusValor == "" && tempEmKelvinValor == "") {
        tempEmCelsiusValor = ((tempEmFahrenheitValor - 32) * fahrenheitParaCelsius).toFixed(2);
        tempEmKelvinValor = (tempEmCelsiusValor * 1 + celsiusParaKelvin).toFixed(2);
    }

    tempEmFahrenheit.value = tempEmFahrenheitValor;
    tempEmKelvin.value = tempEmKelvinValor;
    tempEmCelsius.value = tempEmCelsiusValor;
}



tempEmCelsius.addEventListener("keydown", function (e) {
    tempEmKelvin.value = "";
    tempEmFahrenheit.value = "";
});

tempEmKelvin.addEventListener("keydown", function (e) {
    tempEmFahrenheit.value = "";
    tempEmCelsius.value = "";
});

tempEmFahrenheit.addEventListener("keydown", function (e) {
    tempEmKelvin.value = "";
    tempEmCelsius.value = "";
});

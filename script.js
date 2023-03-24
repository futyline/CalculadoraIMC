

function calcula() {
    var resultado
    var altura = document.getElementById("altura").value / 100
    var peso = document.getElementById("peso").value
    var imc = peso / (altura * altura)
    console.log("a altura é: " + altura)
    console.log("o Peso é: " + peso)
    console.log("seu IMC é: " + imc.toFixed(2))
    if (imc <= 18.5) {
        resultado = `<p> Seu IMC é: ${imc.toFixed(2)}, <br>Classificado como MAGREZA<br>Grau de obesidade igual a 0 </p>`
        document.getElementById("resultado").innerHTML = resultado
    } else if (imc <= 24.9) {
        resultado = `<p> Seu IMC é: ${imc.toFixed(2)}<br>Classificado como NORMAL<br>
        Grau de obesidade:  0 </p>`
        document.getElementById("resultado").innerHTML = resultado
    } else if (imc <= 29.9) {
        resultado = `<p> Seu IMC é: ${imc.toFixed(2)}<br>Classificado como SOBREPESO<br>
        Grau de obesidade:  TIPO 1 </p>`
        document.getElementById("resultado").innerHTML = resultado
    } else if (imc <= 39.9) {
        resultado = `<p> Seu IMC é: ${imc.toFixed(2)}<br>Classificado como OBESIDADE<br>
        Grau de obesidade:  TIPO 2 </p>`
        document.getElementById("resultado").innerHTML = resultado
    } else if (imc > 40) {
        resultado = `<p> Seu IMC é: ${imc.toFixed(2)}<br>Classificado como OBESIDADE GRAVE<br>
        Grau de obesidade:  TIPO 3 </p>`
        document.getElementById("resultado").innerHTML = resultado
    }
}

function limpar() {
    document.getElementById("altura").value = ""
    document.getElementById("peso").value = ""
    document.getElementById("resultado").innerHTML = ""
}
let resultadoVisivel = false;

function calcularIMC(){

    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if(isNaN(peso) || isNaN(altura) || altura <= 0){
        alert("Preencha os valores corretamente.");
        return;
    }

    let imc = peso / (altura * altura);

    document.getElementById("valorIMC").innerHTML =
        "Seu IMC é: " + imc.toFixed(2);

    let classificacao = "";

    if(imc < 18.5){
        classificacao = "Abaixo do peso";
    }
    else if(imc < 25){
        classificacao = "Peso normal";
    }
    else if(imc < 30){
        classificacao = "Sobrepeso";
    }
    else if(imc < 35){
        classificacao = "Obesidade grau I";
    }
    else if(imc < 40){
        classificacao = "Obesidade grau II";
    }
    else{
        classificacao = "Obesidade grau III";
    }

    document.getElementById("classificacao").innerHTML =
        classificacao;
}

function mostrarResultado(){

    let resultado = document.getElementById("resultadoIMC");

    if(resultadoVisivel){
        resultado.style.display = "none";
        resultadoVisivel = false;
        document.getElementById("btnResultado").innerHTML =
            "MOSTRAR RESULTADO";
    }
    else{
        resultado.style.display = "block";
        resultadoVisivel = true;
        document.getElementById("btnResultado").innerHTML =
            "OCULTAR RESULTADO";
    }
}

function trocarTema(){

    document.body.classList.toggle("dark-mode");

    let icone = document.querySelector("#temaBtn i");

    if(document.body.classList.contains("dark-mode")){
        icone.className = "bi bi-sun-fill";
    }
    else{
        icone.className = "bi bi-moon-fill";
    }

}
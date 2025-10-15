const txtPeso = document.getElementById('peso');
const txtAltura = document.getElementById('altura');
const resultado = document.getElementById('resultado');
const btnCalcular = document.getElementById('btnCalcular');

function calcular(){
    let peso = parseFloat(txtPeso.value);
    let altura = parseFloat(txtAltura.value);

    if(isNaN(peso) || isNaN(altura)){
        resultado.innerHTML = "Por favor ingresa peso y altura";
        return;
    }

    if(peso <= 0 || altura <= 0){
        resultado.innerHTML = "El peso y la altura deben de ser mayores que 0";
        return;
    }

    const imc = peso / (altura*altura);
    let nivel = "";

    if(imc < 18.5){
        nivel = "Bajo peso";
    }

    else if(imc < 24.9){
        nivel = "Normal";
    }

    else if(imc < 29.9){
        nivel = "Sobrepeso";
    }

    else{
        nivel = "Obesidad";
    }

    resultado.innerHTML = `Tu IMC es:<strong>${imc.toFixed(2)}</strong> - Nivel: <strong>${nivel}</strong>`;

}

btnCalcular.addEventListener('click',calcular);
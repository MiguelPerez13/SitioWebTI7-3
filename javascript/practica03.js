

const operaciones = document.getElementById('operaciones');
const operador = document.getElementById('lblOp');
const txtNum1 = document.getElementById('txtNum1');
const txtNum2 = document.getElementById('txtNum2');
const resultado = document.getElementById('resultado');
const btnCalcular = document.getElementById('btnCalcular');

//declarar funciones

//funcion para actualizar el operador

function mostrarOperador(){
    
    
    const item = parseInt(operaciones.value);
    let op = "";

    switch(item){
        case 1:
            op = '+';
        break;
        case 2:
            op = '-';
        break;
        case 3:
            op = '*';
        break;
        case 4:
            op = '/';
        break;
        default:
            op = "";
        break;
    }
    operador.textContent = op;
}

function calcular(){
    const num1 = parseInt(txtNum1.value);
    const num2 = parseInt(txtNum2.value);
    const operacion = parseInt(operaciones.value);
    let res = 0;

    if(isNaN(num1) || isNaN(num2)){
        resultado.textContent = 'Favor de ingresar dos numeros';
        
        return;
    }

    switch(operacion){
        case 1:
            res = num1+num2;
        break;
        case 2:
            res = num1-num2;
        break;
        case 3:
            res = num1*num2;
        break;
        case 4:
            res = num1/num2;
        break;
        default:
            res = 'Sin operacion';
        break;
    }

    resultado.textContent = res;
}

operaciones.addEventListener('change',mostrarOperador);

btnCalcular.addEventListener('click',calcular)





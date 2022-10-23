// CALCULATOR
let aNumber = "a";
let bNumber = "b";
let exitCalculator;
let resultArr = [];
let sqrtResult;
let sumResult;
let subsResult;
let multResult;
let divResult;
 

do {
    //Solicitar primer numero
    do {
        aNumber = Number(window.prompt("Type a number.", "number a")); //Prompt coge strings, pasamos el string a numero usando Number
        if (isNaN(aNumber)) {
            alert('Character is not valid. Enter a Number.')
        }
    } while (isNaN(aNumber)); // Repetir hasta que se introduzca valor correcto

    //Solicitar segundo numero. Aqui no obligamos a meter otro numero. Si se pulsa enter se calcula la raiz cuadrada

    bNumber = Number(window.prompt("Type a number or press any key to get the Square Root.", "number b"));

    //Cálculos
    if (isNaN(bNumber)) {
        sqrtResult = parseFloat(Math.sqrt(aNumber).toFixed(3));
        resultArr.push(sqrtResult);
        alert(`Resultado: √${aNumber}=${resultArr}`);
    } else {
        sumResult = aNumber + bNumber;
        subsResult = aNumber - bNumber;
        multResult = aNumber * bNumber;
        divResult = aNumber / bNumber;

        resultArr.push(sumResult, subsResult, multResult, divResult);

        //Truncado de decimales
        const numeroDeDecimales = 3;
        for (i=0; i < resultArr.length; i++){
            resultArr[i] = parseFloat(resultArr[i].toFixed(numeroDeDecimales));
        }
        
        //Mostrar resultados
        alert(`Resultado: ${aNumber}+${bNumber}=${resultArr[0]}, ${aNumber}-${bNumber} = ${resultArr[1]}, ${aNumber}*${bNumber}= ${resultArr[2]}, ${aNumber}/${bNumber}= ${resultArr[3]}`)
    
        
    }
    //Reiniciar array de resultados
    resultArr = [];

    exitCalculator = confirm("Exit calculator?");
} while (!exitCalculator);
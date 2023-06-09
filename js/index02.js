let dados = [];

function enviar() {
    let peso = window.document.getElementById ('peso').value
    let altura = window.document.getElementById ('altura').value
    let resultado = window.document.getElementById ('resultado')
   

    if (peso || altura == undefined || NaN) {
        resultado.innerHTML = '<p id="resulnegativo">VALOR INVÁLIDO, DIGITE NOVAMENTE!</P>'
    }
    
    let imc = peso / (altura * altura)

    dados.push ({
        peso: peso,
        altura: altura,
        imc: imc.toFixed(2)
    });

    console.log (dados)

    if (imc > 40) {resultado.innerHTML = `<p id="resulnegativo"> SEU IMC É ${imc.toFixed(2)} OBESIDADE GRAU 3! </p>`}
    else if (imc > 35) {resultado.innerHTML = `<p id="resulnegativo"> SEU IMC É ${imc.toFixed(2)} OBESIDADE GRAU 2! </p>`}
    else if (imc > 30) {resultado.innerHTML = `<p id="resulnegativo"> SEU IMC É ${imc.toFixed(2)} OBESIDADE GRAU 1! </p>`}
    else if (imc > 25) {resultado.innerHTML = `<p id="resulnegativo"> SEU IMC É ${imc.toFixed(2)} SOBREPESO! </p>`}
    else if (imc > 18.5) {resultado.innerHTML = `<p id="resulpositivo"> SEU IMC É ${imc.toFixed(2)} PESO NORMAL! </p>`}
    else if (imc < 18.5) {resultado.innerHTML = `<p id="resulnegativo"> SEU IMC É ${imc.toFixed(2)} ABAIXO DO PESO! </p>`}
}


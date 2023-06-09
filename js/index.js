function formIMC () {
    const formulario = document.querySelector ('.formulario');
    const resultado = document.querySelector('.resultado');
    /*const enviar = document.querySelector('.enviar')*/
    /*const pessoa = [];*/

   function receberEventoFormulario (evento) {
        evento.preventDefault();
        divResultado ('Olá Mundo');

        /*const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura'); */

        /*pessoa.push({
            peso: peso.value,
            altura: altura.value
        });*/

        /*let imc = peso.value / (altura.value * altura.value);
        if (imc <= 18.4) {resultado.innerHTML = `<p>Seu IMC é ${imc} e você esta abaixo do peso.</p>`
        } else if (imc >= 18.5 && imc <= 24.9) {resultado.innerHTML = `<p>Seu IMC é ${imc} e você esta com peso    normal.</p>`
        } else if (imc >= 25 && imc <= 29.9) {resultado.innerHTML = `<p>Seu IMC é ${imc} e você esta com sobrepeso  .</p>`
        } else if (imc >= 30 && imc <= 34.9) {resultado.innerHTML = `<p>Seu IMC é ${imc} e você esta com obesidade tipo 1.</p>`
        } else if (imc >= 35 && imc <= 39.9) {resultado.innerHTML = `<p>Seu IMC é ${imc} e você esta com obesidade tipo 2.</p>`
        } else if (imc >= 40) {resultado.innerHTML = `<p>Seu IMC é ${imc} e você esta com obesidade tipo 3.</p>`
        };  
    } */

    function divResultado( msg ) {
        const resultado = document.querySelector ('.resultado');
        resultado.innerHTML = msg;
        //const p = document.criateElement ('p');
       // p.classList.add ('paragrafoResultado');
       // p.innerHTML = 'Qualquer coisa.'; 
    }

    formulario.addEventListener ('submit', receberEventoFormulario);
    
    /*console.log (pessoa);*/
    
}
formIMC();
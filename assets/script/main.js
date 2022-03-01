const frase = document.querySelector('.frase1')
const frase2 = document.querySelector('.frase2')



function typeWriter(elemento, temp){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(()=> elemento.innerHTML += letra, temp * i)
    });

}



 typeWriter(frase, 75)
 typeWriter(frase2, 300)



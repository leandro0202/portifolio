const frase = document.querySelector('.frase1')
const frase2 = document.querySelector('.frase2')



function typeWriter(elemento, temp) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, temp * i)
    });

}

typeWriter(frase, 75)
typeWriter(frase2, 300)

function hoverImage() {
    const img = document.querySelectorAll('.header-links a img').forEach((elemento, indice) => {
        if(indice == 0){
            elemento.addEventListener("mouseenter", () => {
                elemento.src = 'assets/img/github2.png'
            })
            elemento.addEventListener("mouseout", () => {
                elemento.src = 'assets/img/github.png'
            })
        }else{
            elemento.addEventListener("mouseenter", () => {
                elemento.src = 'assets/img/linkdin2.png'
            })
            elemento.addEventListener("mouseout", () => {
                elemento.src = 'assets/img/linkdin.png'
            })
        }
  
    })
}


hoverImage()
// Lógica para o carrossel de imagens automático

let slideIndex = 0;
showSlides(); // Inicia o carrossel

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    
    // Esconde todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Incrementa o índice do slide
    slideIndex++;
    
    // Se o índice for maior que o número de slides, volta para o primeiro
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Mostra o slide atual
    slides[slideIndex - 1].style.display = "block";
    
    // Chama a função novamente a cada 3 segundos (3000 milissegundos)
    setTimeout(showSlides, 3000); 
}

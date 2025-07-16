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
    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
    }
    
    // Chama a função novamente a cada 3 segundos (3000 milissegundos)
    setTimeout(showSlides, 3000); 
}


// NOVO: Lógica para esconder o header no scroll (versão mobile)
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener("scroll", function() {
    // Apenas executa em telas menores que 768px
    if (window.innerWidth <= 768) {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Garante que o header não se esconda se estivermos no topo da página
        if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
            // Scroll para baixo
            header.classList.add('header-hidden');
        } else {
            // Scroll para cima
            header.classList.remove('header-hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para o caso de scroll no topo
    }
}, false);

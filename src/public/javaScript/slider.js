export function sliderFunction() {
    document.addEventListener('DOMContentLoaded', function() {
        const radios = document.querySelectorAll('input[type="radio"]');
        const divs = document.querySelectorAll('.content');
        const header = document.querySelector('header');
        
        let currentIndex = 0;
        const intervalTime = 10000; // 10 segundos
        
        const changeDiv = () => {
            divs.forEach(div => {
                div.classList.remove('active');
            });
            divs[currentIndex].classList.add('active');
            
            if (divs[currentIndex].id === 'div1') {
                header.style.backgroundImage = "url('image/microfone-1.jpg')";
            } else if (divs[currentIndex].id === 'div2') {
                header.style.backgroundImage = "url('image/slide/IMG_7677.jpg')";
            }
            
            currentIndex = (currentIndex + 1) % divs.length;
        };
        
        // Chamar a função changeDiv inicialmente
        changeDiv();
        
        // Iniciar o intervalo de mudança das divs
        setInterval(changeDiv, intervalTime);
    });
}
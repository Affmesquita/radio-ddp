export function sliderFunction() {
    document.addEventListener('DOMContentLoaded', function() {
        const radios = document.querySelectorAll('input[type="radio"]');
        const divs = document.querySelectorAll('.content');
        const header = document.querySelector('header');

        radios.forEach(radio => {
            radio.addEventListener('change', () => {
                divs.forEach(div => {
                    div.classList.remove('active');
                });

                const selectedRadio = document.querySelector('input[name="radio-input"]:checked');
                const selectedDiv = document.getElementById('div' + selectedRadio.id.replace('radio', ''));
                selectedDiv.classList.add('active');

                if (selectedDiv.id === 'div1') {
                    header.style.backgroundImage = "url('image/microfone-1.jpg')";
                } else if (selectedDiv.id === 'div2') {
                    header.style.backgroundImage = "url('image/slide/IMG_7677.jpg')";
                }
            });
        });
    });
}
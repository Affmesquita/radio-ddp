export function handleNewsCardMediaQuery() {

    const imageContainers = document.querySelectorAll('.news-card');

    imageContainers.forEach(imageContainer => {
        const image = imageContainer.querySelector('img');

        const mediaQuery = window.matchMedia('(max-width: 1223px)');

        function handleMediaQuery(mediaQuery) {

            if (mediaQuery.matches) {
                imageContainer.style.backgroundImage = `url(${image.src})`;
                image.style.display = 'none';
                imageContainer.style.backgroundPosition = 'center';
            } else {
                imageContainer.style.backgroundImage = 'none';
                image.style.display = 'block';
            }

        }

        handleMediaQuery(mediaQuery);
        mediaQuery.addListener(handleMediaQuery);
    });
}


/* 

Documentação:

Esse código JavaScript define uma função chamada  handleNewsCardMediaQuery  que lida com a lógica de manipulação de elementos  .news-card  com base em uma media query de largura máxima de 1024px. 
 
Aqui está uma explicação passo a passo do código: 
 
1.  const imageContainers = document.querySelectorAll('.news-card'); : Esta linha seleciona todos os elementos com a classe  .news-card  e armazena-os em uma NodeList na variável  imageContainers . 
 
2.  imageContainers.forEach(imageContainer => { ... }); : Este trecho itera sobre cada elemento  .news-card  encontrado e executa o código dentro do bloco de código para cada elemento. 
 
3.  const image = imageContainer.querySelector('img'); : Para cada elemento  .news-card , esta linha seleciona o elemento  img  dentro desse elemento e armazena-o na variável  image . 
 
4.  const mediaQuery = window.matchMedia('(max-width: 1024px)'); : Aqui, é criada uma instância de  MediaQueryList  com a condição de largura máxima de 1024px e armazenada na variável  mediaQuery . 
 
5.  function handleMediaQuery(mediaQuery) { ... } : É definida uma função chamada  handleMediaQuery  que recebe o objeto  mediaQuery  como argumento e contém a lógica para manipular o estilo dos elementos com base no estado da media query. 
 
6.  if (mediaQuery.matches) { ... } else { ... } : Dentro da função  handleMediaQuery , é verificado se a media query corresponde à condição especificada (largura máxima de 1024px) e, em seguida, são aplicadas as alterações de estilo nos elementos com base nessa condição. 
 
7.  handleMediaQuery(mediaQuery); : A função  handleMediaQuery  é chamada inicialmente para aplicar as alterações de estilo com base no estado inicial da media query. 
 
8.  mediaQuery.addListener(handleMediaQuery); : Um ouvinte de eventos é adicionado à media query para que a função  handleMediaQuery  seja chamada sempre que o estado da media query mudar. 
 
Em resumo, essa função  handleNewsCardMediaQuery  é responsável por manipular o estilo dos elementos  .news-card  com base na largura máxima da janela do navegador, alternando entre a exibição da imagem de fundo e a exibição da imagem dentro do elemento, dependendo do estado da media query.
*/ 

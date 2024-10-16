const btnMenu = document.getElementById("btn-hamburger")

export function toggleMenu() {
    const nav = document.getElementById('header-list')
    nav.classList.toggle('active')
}

btnMenu.addEventListener('click', toggleMenu)






















/*
const btnMenu = document.getElementById("btn-hamburger");

// Adiciona classe inicial ao botão hamburguer
btnMenu.classList.add('inactive');

export function toggleMenu() {
    const nav = document.getElementById('header-list');
    nav.classList.toggle('active');
}

btnMenu.addEventListener('click', function() {
    btnMenu.classList.remove('inactive'); // Remove a classe 'inactive' ao ser clicado
    toggleMenu();
});













olar, percebi que quando a largura de 1000px e o nav desaparece para então virar o menu hamburguer, que quando precisonado ele apareceria o nav de outras forma, acabou que toda vez que eu botava a largura para 1000px o menu aparecia ja a berto, como se ja tivesse apertado o btn-hamburguer, agora coloquei o  
btnMenu.addEventListener('click', toggleMenu) 
no index que esse codigo estava exportado e solucionei, pode me explicar o que aconteceu 
?

Claro, vou explicar o que aconteceu com a sua solução. 
 
Quando você inicialmente tinha o event listener  btnMenu.addEventListener('click', function() { ... });  no arquivo onde o código estava exportado, o evento de clique no botão hamburguer estava sendo associado a uma função anônima que removia a classe 'inactive' do botão e chamava a função  toggleMenu()  para alternar a visibilidade do menu de navegação. 
 
O problema que você estava enfrentando era que, ao redimensionar a largura da tela para 1000px, o menu hamburguer deveria aparecer e o botão deveria estar inativo inicialmente. No entanto, devido à maneira como o event listener estava configurado, o menu hamburguer aparecia como se o botão já tivesse sido pressionado. 
 
Ao mover o event listener  btnMenu.addEventListener('click', toggleMenu)  para o arquivo index onde o código estava exportado, você está associando diretamente a função  toggleMenu()  ao evento de clique no botão hamburguer. Isso garante que a função  toggleMenu()  seja chamada corretamente quando o botão é clicado, sem a necessidade de remover a classe 'inactive' manualmente. 
 
Essa modificação garante que o comportamento do menu hamburguer seja o esperado, com o botão hamburguer ativando e desativando o menu de navegação conforme o esperado quando a largura da tela atinge 1000px.
*/



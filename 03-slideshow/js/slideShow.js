
const images = [
    { 'id': '1', 'url': './img/chrono.jpg' },
    { 'id': '2', 'url': './img/inuyasha.jpg' },
    { 'id': '3', 'url': './img/ippo.jpg' },
    { 'id': '4', 'url': './img/tenchi.jpg' },
    { 'id': '5', 'url': './img/tenjhotenge.jpg' },
    { 'id': '6', 'url': './img/yuyuhakusho.jpg' }
];

const containerItens = document.querySelector('#container-slide'); //querySelector fará uma pesquisa de ID ou Classe no HTML

const loadImages = (images, container) => {

    images.array.forEach(images => { //forEach percorre a matriz inteira
        container.innerHtml +=
            `<div class='item'>
    <img src='${images.url}'
    </div>`

    })
};

loadImages(images, containerItens);

let itens = document.querySelectorAll('.item');

const anterior = () => {  //arrow function, um jeito mais fácil de fazer funções (provavelmente eu n vou lembrar kkkkk)
    containerItens.appendChild(itens[0]);
    itens = document.querySelectorAll('.item');
}

const proximo = () => {
    const lastItem = itens[itens.length - 1];
    containerItens.insertBefore(lastItem, itens[0]);
    itens = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', anterior);
document.querySelector('#next', proximo);



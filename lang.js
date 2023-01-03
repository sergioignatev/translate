let loremEn=`<h1 class="center">LOREM IPSUM</h1>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>`
let loremRu=`<h1 class="center">Лорем Ипсум</h1>
<p>Будем считать что это на русском</p>`
function En(){
    document.querySelectorAll('h1')[0].innerHTML='Home';
    document.querySelectorAll ('h1')[1].innerHTML='Works';
    document.querySelectorAll ('h1')[2].innerHTML=`About`;
    document.querySelectorAll('.middle')[0].innerHTML=loremEn
}
function Ru(){
    document.querySelectorAll('h1')[0].innerHTML='Главная';
    document.querySelectorAll ('h1')[1].innerHTML='Работы';
    document.querySelectorAll ('h1')[2].innerHTML="Обо Мне"
    document.querySelectorAll('.middle')[0].innerHTML=loremRu
}
En()
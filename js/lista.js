const lista=document.getElementById('lista')
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');
const item5 = document.getElementById('item5');
const item6 = document.getElementById('item6');
const item7 = document.getElementById('item7');
const item8 = document.getElementById('item8');
const item9 = document.getElementById('item9');
const item10 = document.getElementById('item10');
const imagem = document.getElementById('imagem');
const img = imagem.getElementsByTagName('img')[0];

item1.addEventListener('click', () => {
    img.src = `../img/imagem2.webp`;
  });
item2.addEventListener('click', () => {
    img.src = `../img/imagem3.jpg`;
  });
item3.addEventListener('click', () => {
    img.src = `../img/imagem4.webp`;
  });
item4.addEventListener('click', () => {
    img.src = `../img/imagem5.jpeg`;
  });
item5.addEventListener('click', () => {
    img.src = `../img/imagem6.webp`;
  });
item6.addEventListener('click', () => {
    img.src = `../img/imagem7.jpg`;
  });
item7.addEventListener('click', () => {
    img.src = `../img/imagem8.webp`;
  });
item8.addEventListener('click', () => {
    img.src = `../img/imagem9.jpg`;
  });
item9.addEventListener('click', () => {
    img.src = `../img/imagem10.webp`;
  });
item10.addEventListener('click', () => {
    img.src = `../img/imagem11.webp`;
  });
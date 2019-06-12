'use strict';
const title = document.getElementById('page-title');
title.innerText = 'Cats are awesome';
title.style.textDecoration = 'underline';

const subtitle = document.querySelector('#page-subtitle');
subtitle.innerHTML = 'Domestic cats, no matter their breed, are <strong>all members of one species.</strong>';
subtitle.style.color = 'grey';

const paragraph = document.getElementsByClassName('page-text');
paragraph[1].innerText = 'Plentiful rodents probably drew wild felines to human communities.';

const highlight = document.querySelectorAll('.text-highlight');
console.log(highlight);
highlight[0].classList.remove('text-highlight');
highlight[1].classList.remove('text-highlight');

const image = document.getElementsByTagName('img');
console.log(image);
image[0].style.filter = 'grayscale(100%)';
image[3].style.filter = 'grayscale(100%)';

const article = document.querySelectorAll('article');
console.log(article);
article[0].classList.add('magazine-article');
article[1].classList.add('magazine-article');
article[2].classList.add('magazine-article');
article[3].classList.add('magazine-article');

// créer une node
const myParagraph = document.createElement('p');
myParagraph.innerText = 'Hello';
document.querySelector('body').appendChild(myParagraph);

const div = document.createElement('div');
div.classList.add('cookies-notice');
div.style.display = 'block';
div.style.bottom = '0px';
div.style.position = 'fixed';
document.querySelector('body').appendChild(div);

const paragraphe = document.createElement('p');
paragraphe.classList.add('cookies-text');
paragraphe.innerHTML = 'By using our website, you acknowledge that you have read and understand our <strong>Cookies Policy</strong>';
div.appendChild(paragraphe);

const lien = document.

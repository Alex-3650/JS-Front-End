function extractText() {
const elementsList=document.querySelectorAll('ul li');
const textAreaElement=document.querySelector('#result');


textAreaElement.value=[...elementsList].map(el=> el.textContent.trim()).join('\n');
}
 
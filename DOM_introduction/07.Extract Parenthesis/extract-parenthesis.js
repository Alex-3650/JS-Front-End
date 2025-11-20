function extract(elemetnId) {
   let text= document.querySelector('#'+elemetnId).textContent.trim();

  const regex = /\(([^)]*)\)/g;

  const matches=[...text.matchAll(regex)].map(el=>el[1]).join('; ');
  console.log(matches);
}
function solve() {
 const inputEl=document.querySelector('#input');
 const outputEl=document.querySelector('#output');

 const sentences=inputEl.value.split('. ');
 const sentencePerP=3;
 const numberOfP=Math.ceil(sentences.length/sentencePerP);
 let output='';



 for (let i = 0; i < numberOfP; i++) {
   let start =i*sentencePerP;
   let end=start+sentencePerP;
   
   output+='<p>'
   output+=sentences.slice(start,(end)).join('. ');
   output+='</p>'
  
 }
 
 outputEl.innerHTML=output;
}
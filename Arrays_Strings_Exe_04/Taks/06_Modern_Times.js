
function solve(text) {
     let count=0;
    const words=text.split(' ');
   for(let w of words)
    {
    
    const pattern = /^#[A-Za-z]+$/;
    if(pattern.test(w)) console.log(w.substring(1));
    
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');

//'Nowadays everyone uses # to tag a #special word in #socialMedia'
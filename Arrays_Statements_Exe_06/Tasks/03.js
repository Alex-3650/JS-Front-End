// function solve(c1,c2) {

//    const start=Math.min(c1.charCodeAt(0),c2.charCodeAt(0));
//    const end = Math.max(c1.charCodeAt(0),c2.charCodeAt(0));

//     let result='';
//    for(let i=start+1 ;i<end; i++){
    
     
//     result+=String.fromCharCode(i)+ ' ';
//    }
// return result;
    
// }
function solve(c1,c2) {

   const start=Math.min(c1.charCodeAt(0),c2.charCodeAt(0))+1;
   const end = Math.max(c1.charCodeAt(0),c2.charCodeAt(0));

    const chars= Array.from({length:end-start},(_,i)=>String.fromCharCode(start+i));
    
    const result = chars.reduce((result,el)=> result + el +' ','');
    return result;
    
}
console.log(solve('a','d'));
console.log(solve('#',':'));
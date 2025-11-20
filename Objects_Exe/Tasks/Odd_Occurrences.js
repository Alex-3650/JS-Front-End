function solve(input){

 const words=input.split(' ').reduce((word,element)=>{
    element=element.toLowerCase();
    if(word.hasOwnProperty(element)){
        word[element]+=1;
    }else{
        word[element]=1;
    }
    return word;
 },{})
 let output='';
 for (const word in words) {
    
    if(words[word]%2==1){
        output+=word+' ';
    }
    
    
    
    
 }
 console.log(output);



}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
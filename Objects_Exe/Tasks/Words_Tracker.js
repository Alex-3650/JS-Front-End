function words (input) {

    const searchWords=input.shift().split(' ');
    let list=[];
    
    const matchWords=searchWords.reduce((word,element)=>{
         word[element]=0;
        return word;
       
    },{});

   input.forEach(word => {
     if(matchWords.hasOwnProperty(word)){
        matchWords[word]+=1;
     }
     
   });

  list=Object.entries(matchWords);
  list.sort((a,b)=>b[1]-a[1]);


  list.forEach(([word,count])=>console.log(`${word} - ${count}`));
   

   
    
}

words([

'this sentence',

'In', 'this', 'sentence', 'you', 'have',

'to', 'count', 'the', 'occurrences', 'of', 

'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task' ]);
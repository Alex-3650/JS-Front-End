
function sum(num){

    const stringOfNum=num.toString();
    let sum=0;
    for(let i=0; i<stringOfNum.length;i++){
          sum+=Number(stringOfNum[i]);
    }
    console.log(sum);
}

function checkSame(num){

     let same=true;
     const stringNum=num.toString();
    for (let i = 0; i < stringNum.length-1; i++) {
       if(stringNum[i]!==stringNum[i+1]){
       same= false;

       }       
    }
    if(same==false){
        console.log('false');
    }else{
        console.log('true');
    }
   
    sum(num);
    
}
checkSame(2222222);
checkSame(1234);
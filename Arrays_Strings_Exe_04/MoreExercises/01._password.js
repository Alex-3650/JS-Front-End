function solve(text) {
   const [username,...password] =text;
 
   password.forEach((element,index) => {
   

    if(reverse(username)===element){
        console.log(`User ${username} logged in.`);
    }
    else if(index>=3){
          console.log(`User ${username} blocked!`);
       
    }
    else{
        console.log('Incorrect password. Try again.');
    }
    
   });
}

function reverse(s){
    return Array.from(s).reverse().join('');
}

solve(['Acer','login','go','let me in','recA']);
solve(['sunny','rainy','cloudy','sunny','not sunny'])
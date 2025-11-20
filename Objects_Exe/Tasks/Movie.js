function movie(input){
 const movie={};

    
        input.forEach(line => {
   
    if(line.includes('addMovie')){
       
    const[_,name]=line.split('addMovie ');
       movie[name]={name}

    }else if(line.includes('directedBy')){
        const[movieName,director]=line.split(' directedBy ');
        if(!movie.hasOwnProperty(movieName)) movie[movieName]={};
              movie[movieName].director=director;    
            }
             else{
        const[movieName,date]=line.split(' onDate ');
        if(!movie.hasOwnProperty(movieName))movie[movieName]={};
             movie[movieName].date=date;
        
    }
    }

);

for (const element in movie) {
    if(Object.keys(movie[element]).length>2){
        console.log(JSON.stringify(movie[element]));
    }
    
    
}


}
movie([

'addMovie Fast and Furious',

'addMovie Godfather',

'Inception directedBy Christopher Nolan',

'Godfather directedBy Francis Ford Coppola',

'Godfather onDate 29.07.2018',

'Fast and Furious onDate 30.07.2018',

'Batman onDate 01.08.2018',

'Fast and Furious directedBy Rob Cohen'

]);
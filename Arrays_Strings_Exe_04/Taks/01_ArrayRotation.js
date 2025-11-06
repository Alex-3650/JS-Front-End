function solve(array,rotation) {
    if(rotation>=array.length){
        rotation%=array.length;
    }

    for (let i = 0; i < rotation; i++) {
        
        array.push(array.shift());
    }
    console.log(array.join(', '));
}
solve([51, 47, 32, 61, 21], 2);

//[51, 47, 32, 61, 21], 2  ,32 61 21 51 47

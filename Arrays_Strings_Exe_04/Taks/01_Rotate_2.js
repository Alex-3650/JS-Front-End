Array.prototype.rotate=function(count){

    for (let index = 0; index <count; index++) {
        this.push(this.shift());
        
    }
    return this.join(' ');
}
let arr =[51, 47, 32, 61, 21];
console.log(arr.rotate(2));
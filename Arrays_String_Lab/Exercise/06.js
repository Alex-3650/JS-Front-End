function solve(text,word){

    const pattern=RegExp(`\\b${word}\\b`,'g')

    const arrayMatch=text.match(pattern)|| [];
    console.log(arrayMatch.length);
}
solve('This is a word and it also is a sentence',

'is')
solve('softuni is great place for learning new programming languages',

'softuni')
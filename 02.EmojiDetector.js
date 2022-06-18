function solve(input){
 let text = input[0];

 let smileRegex = /(\:\:|\*\*)([A-Z][a-z][a-z]+)\1/g;
 let digitRegex =/\d/g;

 let digits = text.match(digitRegex);

 let treshold = 1;
 digits.map(d => treshold *= Number(d));
 console.log(`Cool threshold: ${treshold}`);

 let validMatch;
 let emojids = [];

 while(validMatch = smileRegex.exec(text)) {
     emojids.push(validMatch);
     
 };

 console.log(`${emojids.length} emojis found in the text. The cool ones are:`);

 for(let emojiMatch of emojids) {
    let emojiText = emojiMatch[2];
    let fullEmoji = emojiMatch[0];
    let coolness = 0;
    for (let letter of emojiText) {
        coolness += letter.charCodeAt();
    }
    if(coolness > treshold){
        console.log(fullEmoji)
    }
 }


}
solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
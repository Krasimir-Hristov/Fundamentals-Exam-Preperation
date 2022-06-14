function solve(input) {

    let words = input.shift().split(` | `);
    let wordDefinations = {};
    

    for(let currWord of words) {
        let [word,defination] = currWord.split(`: `);
        if(wordDefinations.hasOwnProperty(word)) {
            wordDefinations[word].push(defination)
        } else {
            wordDefinations[word] = [defination];
        }
        
       
    }
    let wordsTest = input.shift().split(` | `);
    
    
    if(input[0] === "Test") {
       for(let curTest of wordsTest ) {
           if(wordDefinations.hasOwnProperty(curTest)) {
            let print = wordDefinations[curTest]
            console.log(`${curTest}:`);
            print.forEach(x => console.log(`-${x}`));
           }
           
        
       }
    } else {
        let keys = Object.keys(wordDefinations)
        console.log(keys.join(` `));
       
    }
    
  


}
solve(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
"care | kitchen | flower",
"Test"]);

// solve(["programmer: an animal, which turns coffee into code | developer: a magician",
// "fish | domino",
// "Hand Over"])

// solve(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
// "bit | code | tackle",
// "Test"]);

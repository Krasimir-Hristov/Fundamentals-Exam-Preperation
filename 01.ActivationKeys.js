function solve(input){
let key = input.shift();
input.pop();

for(let command of input){
    let [command1,index1,index2,index3] = command.split(`>>>`);
    
    if(command1 === `Slice`){
        let before = key.slice(0, Number(index1));
        let after = key.slice(Number(index2));
        key = before + after;
        console.log(key);
    }else if(command1 === `Flip`){
        let before = key.slice(0, Number(index2));
        let after = key.slice(Number(index3));
        let flipped = key.slice(index2,index3);
        if(index1 === `Upper`){
            flipped = flipped.toUpperCase();
        }else{
            flipped = flipped.toLowerCase();
        }

        key = before + flipped + after;
        console.log(key)
    }else if(command1 === `Contains`){
        if(key.includes(index1)){
            console.log(`${key} contains ${index1}`);
        }else{
            console.log(`Substring not found!`);
        }
    }
}
console.log(`Your activation key is: ${key}`)



}
solve(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])

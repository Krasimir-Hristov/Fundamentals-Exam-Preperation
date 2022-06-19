function solve(input) {

let people = Number(input.shift());
let wagons = input[0].split(` `).map(Number);

for(let i= 0;i < wagons.length;i++){
    let wagon = wagons[i];
    if(wagon < 4 && people > 0){
        let pplCounter = wagons[i]
        for(let j = 0; j <= 4; j++){
            pplCounter++;
            people -= 1
            if(pplCounter === 4 || people === 0){
                
                wagons[i] = pplCounter;
                break;
            }
        }
       
    }
   
}
if(people === 0){
    if(wagons.includes(0) || wagons.includes(1) || wagons.includes(2) || wagons.includes(3)){
        console.log(`The lift has empty spots!
        ${wagons.join(` `)}`);
    }else{
        console.log(wagons.join(` `));
    }
}else{
    console.log(`There isn't enough space! ${people} people in a queue!
    ${wagons.join(` `)}`);
}
}
 solve(["16", "0 0 0 0"]);

//solve(["20", "0 2 0"]);

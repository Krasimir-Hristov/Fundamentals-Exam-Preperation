function solve(input){

let foodQuantity = Number(input.shift()) * 1000;
let hayQuantity = Number(input.shift()) * 1000;
let coverQuantity = Number(input.shift()) * 1000;
let weight = Number(input.shift()) * 1000;
let mustGoToStore = false;



for(let i = 0;i < 30;i++){

    
    foodQuantity -= 300;
    if(i % 2 === 1){
        let useHay = foodQuantity * 0.05;
        hayQuantity -= useHay;
    }else if(i % 3 !== 1){
        let useCover = weight / 3;
        coverQuantity -= useCover;
    }
    if(foodQuantity <=0 || hayQuantity <= 0 || coverQuantity <= 0){

        console.log(`Merry must go to the pet store!`);
        mustGoToStore = true
        break;
    }
    
}

if(!mustGoToStore){
    console.log(`Everything is fine! Puppy is happy! Food: ${(foodQuantity / 1000).toFixed(2)}, Hay: ${(hayQuantity / 1000).toFixed(2)}, Cover: ${(coverQuantity / 1000).toFixed(2)}.`);

}



// console.log(2 % 2)
}
solve(["10", "5", "5.2", "1"]);

//  solve(["1", "1.5", "3", "1.5"]);

//  solve(["9","5","5.2","1"]);


function solve(input){
let targets = input.shift().split(` `).map(x => Number(x));
let end = input.pop();
let shots = input.map(x => Number(x));
let numberOfShots = 0;


for(let currentShot of shots){
    let currentTarget = targets[currentShot];
    

    if(currentTarget > -1){
        numberOfShots++;
        targets[currentShot] = -1;
        for(let i = 0; i < targets.length; i++){
            if(targets[i] > -1){
                if(targets[i] > currentTarget){
                    targets[i] -= currentTarget;
                }else{
                    targets[i] += currentTarget;
                }
            }
        }
    }

   
}



console.log(`Shot targets: ${numberOfShots} -> ${targets.join(` `)}`);

}
solve(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])
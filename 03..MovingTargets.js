function solve(array){

    let targets = array.shift().split(` `).map(Number);


    for(let element of array){
        if(element === `End`){
            break;
        }
        let command = element.split(` `)[0];
        let index = Number(element.split(` `)[1]);
        let power = Number(element.split(` `)[2]);
        
        if(command === `Shoot`){
            if(index >= 0 && index < targets.length ){
                targets[index] -= power;
                if(targets[index] <= 0){
                    targets.splice(index, 1)
                }
            }
        }else if(command === `Add`){
            if(index >= 0 && index < targets.length ){
                targets.splice(index, 0, power);
            }else{
                console.log("Invalid placement!")
            }
        }else if(command === `Strike`){
        
            if(index - power >= 0 && index + power < targets.length){
                targets.splice(index - power, power * 2 + 1);
            } else {
              console.log("Strike missed!");
            }
        }
        
    }

    console.log(targets.join(`|`))





}
solve(["52 74 23 44 96 110",
`Add 5 1`,
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"]);

solve(["1 2 3 4 5",
"Strike 0 1",
"End"])
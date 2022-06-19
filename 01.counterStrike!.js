function solve(array) {
    let energy = Number(array.shift());
    let wons = 0;
    let curWonCount = 0;

    for (let distance of array) {
        
        if (curWonCount === 3) {
            energy += wons;
            curWonCount = 0;
        }
        if (distance === `End of battle`) {
            console.log(`Won battles: ${wons}. Energy left: ${energy}`);
            break;
        } else {
            if (energy >= Number(distance)) {
                wons++;
                curWonCount++;
                energy -= Number(distance);
            } else  {
                console.log(`Not enough energy! Game ends with ${wons} won battles and ${energy} energy`);
                break;
            }
        }


    }



}
//solve(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);

solve(["200",
"54",
"14",
"28",
"13",
"End of battle"])

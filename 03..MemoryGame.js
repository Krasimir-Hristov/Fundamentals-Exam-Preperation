function solve(array) {
    let gameField = array.shift().split(` `);
    let moves = 0;

    for (let element of array) {
        moves++;
        if (element === `end`) {
            break;
        }
        let [index1, index2] = element.split(` `).map(Number);
        if (index1 < 0 || index1 >= gameField.length || index2 < 0 || index2 >= gameField.length || index1 === index2) {
            let add = `-${moves}a`;
            gameField.splice(gameField.length / 2, 0, add, add);
            console.log("Invalid input! Adding additional elements to the board");
            continue;
        }
        if (gameField[index1] === gameField[index2]) {
            let x = gameField[index1];
            gameField.splice(index1, 1);
            let tempIndex = gameField.indexOf(x);
            gameField.splice(tempIndex, 1);
            console.log(`Congrats! You have found matching elements - ${x}!`);
        } else {
            console.log(`Try again!`);
        }
        if(gameField.length === 0){
            console.log(`You have won in ${moves} turns!`);
            break;
        }

    }
    if(gameField.length > 0){
        console.log(`Sorry you lose :(\n${gameField.join(` `)}`);
       
    }

   




}
// solve([
//     "a 2 4 a 2 4", 
//     "0 3", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
//     ]);

// solve([
//     "1 1 2 2 3 3 4 4 5 5",
//     "1 0",
//     "-1 0",
//     "1 0",
//     "1 0",
//     "1 0",
//     "end"
// ]);
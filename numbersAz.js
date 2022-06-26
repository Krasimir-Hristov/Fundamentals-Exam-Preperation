function solve(input) {
    let arrOfNums = input.shift().split(` `).map(Number);


    for (let element of input) {

        let [command, index1, index2] = element.split(` `);
        if (command === `Finish`) {
            break;
        }
        index1 = Number(index1);
        index2 = Number(index2);
        if (command === `Add`) {
            arrOfNums.push(index1);
        } else if (command === `Remove`) {
            if (arrOfNums.includes(index1)) {
                let currIndex = arrOfNums.indexOf(index1);
                arrOfNums.splice(currIndex, 1);
            }
        } else if (command === `Replace`) {
            if (arrOfNums.includes(index1)) {
                let currIndex = arrOfNums.indexOf(index1)
                arrOfNums.splice(currIndex, 1, index2)
            }
        } else if (command === `Collapse`) {
            let newArr = [];
            for (let num of arrOfNums) {
                
                if (num >= index1) {
                    newArr.push(num)
                }
            }
            arrOfNums = newArr;
        }
    }


    console.log(arrOfNums.join(` `));



}
// solve([`1 4 5 19`, `Add 1`, `Remove 4`, `Finish`]);

solve([`1 20 -1 10`, `Collapse 8`, `Finish`]);

// solve([`5 9 70 -56 9 9`, `Replace 9 10`, `Remove 9`, `Finish`]);
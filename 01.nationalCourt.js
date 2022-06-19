function solve(input) {

    let efficiency = 0;
    let students = input.pop()
    let hour = 0;

    for (let num of input) {
        efficiency = efficiency + Number(num);
    }

    while (students > 0) {
        hour++;

        if (hour % 4 == 0) {
            continue;
        }
        students -= efficiency
    }

    console.log(`Time needed: ${hour}h.`)
}
solve(['5', '6', '4', '20']);

solve(['1', '2', '3', '45']);

solve(['3', '2', '5', '40']);
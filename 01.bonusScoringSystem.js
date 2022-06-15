function solve(input){
    let students = Number(input.shift());
    let letctures = Number(input.shift());
    let lecturesBonus = Number(input.shift());

    let maxBonus = 0;
    let attendedLectures = 0


    for(let currentattendances of input){
        let bosunPoints = currentattendances / letctures * (5 + lecturesBonus);
        if(bosunPoints > maxBonus){
            maxBonus = bosunPoints;
            attendedLectures = currentattendances;
        }
    }


    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`)
    console.log(`The student has attended ${attendedLectures} lectures.`)



}
solve([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ])
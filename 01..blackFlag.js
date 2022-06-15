function solve(array) {
  let daysForPlunder = Number(array.shift());
  let plunderPerDay = Number(array.shift());
  let expectedPlunder = Number(array.shift());
  let isPlunderReached = false;
  let totalPlunder = 0;

  let dayForMore = 0;
  let dayToLose = 0;
  for (let i = 0; i < daysForPlunder; i++) {
    dayForMore++;
    dayToLose++;
    totalPlunder += plunderPerDay;
    if (dayForMore === 3) {
        dayForMore = 0;
        totalPlunder += plunderPerDay * 0.5;
        
      }
    if (dayToLose === 5) {
      dayToLose = 0;
      totalPlunder -= totalPlunder * 0.3;
      
    }
    

    
    if (totalPlunder >= expectedPlunder) {
      isPlunderReached = true;
    }else{
        isPlunderReached = false;
    }
  }
  if (isPlunderReached) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  }else{
      console.log(`Collected only ${((100 * totalPlunder) / expectedPlunder).toFixed(2)}% of the plunder.`)
  }
}
// solve(["10", "20", "380"]);
// solve(["5", "40", "100"]);
solve(["20","20","200"])

function solve(input) {
  let days = Number(input.shift());
  let players = Number(input.shift());
  let groupEnergy = Number(input.shift());
  let waterPerPerson = Number(input.shift());
  let totalWater = days * players * waterPerPerson;
  let foorPerPerson = Number(input.shift());
  let totalFood = days * players * foorPerPerson;

  let isEnergy = true;

  let waterDay = 0;
  let foodDay = 0;

  for (let day of input) {
    waterDay++;
    foodDay++;
    groupEnergy -= day;
    if(groupEnergy <= 0){
        isEnergy = false;
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
        break;
    }
    if(waterDay === 2){
        waterDay = 0;
        groupEnergy += groupEnergy * 0.05;
        totalWater *= 0.70;

    }
    if(foodDay === 3){
        foodDay = 0;
      let foodForDay =   totalFood / players;
      totalFood -= foodForDay;
        groupEnergy += groupEnergy * 0.1;
    }
  }
  if(isEnergy){
      console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
  }
}
solve([
  "10",
  "7",
  "5035.5",
  "11.3",
  "7.2",
  "942.3",
  "500.57",
  "520.68",
  "540.87",
  "505.99",
  "630.3",
  "784.20",
  "321.21",
  "456.8",
  "330",
]);

solve([
  "12",
  "6",
  "4430",
  "9.8",
  "5.5",
  "620.3",
  "840.2",
  "960.1",
  "220",
  "340",
  "674",
  "365",
  "345.5",
  "212",
  "412.12",
  "258",
  "496",
]);

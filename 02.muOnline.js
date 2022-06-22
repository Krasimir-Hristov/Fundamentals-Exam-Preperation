function solve(input) {
  let health = 100;
  let bitcoins = 0;
  let roomCounter = 0;
  let rooms = input.split(`|`);
  let isAlive = true;

  for (let room of rooms) {
    roomCounter++;
    let tokens = room.split(` `);
    let command = tokens[0];
    let move = Number(tokens[1]);

    if (command === `potion`) {
      let healthMove = health + move;
      if (healthMove < 100) {
        health += move;
        console.log(`You healed for ${move} hp.`);
      } else {
        let healingCounter = 0;
        for (let i = health; i < 100; i++) {
          healingCounter++;
        }
        console.log(`You healed for ${healingCounter} hp.`);
        health += healingCounter;
        healingCounter = 0;
      }

      console.log(`Current health: ${health} hp.`);
    } else if (command === `chest`) {
      bitcoins += move;
      console.log(`You found ${move} bitcoins.`);
    } else {
      health -= move;
      if (health <= 0) {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${roomCounter}`);
        isAlive = false;
        break;
      } else {
        console.log(`You slayed ${command}.`);
      }
    }
  }

  if (isAlive) {
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
  }
}
solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");

solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");

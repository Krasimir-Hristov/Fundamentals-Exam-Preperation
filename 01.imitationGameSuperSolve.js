function solve(input){
  let result = input.shift();

  while(input[0] != `Decode`){
      let tokens = input.shift().split(`|`);
      let command = tokens[0];

      if (command == `Move`){
          let index = Number(tokens[1]);
          let left = result.substring(0, index);
          let right = result.substring(index);

          result = right + left;
      } else if (command == `Insert`) {
        let index = Number(tokens[1]);
        let left = result.substring(0, index);
        let right = result.substring(index);

        result = left + tokens[2] + right;
      } else if ( command == `ChangeAll`) {
          result = result.split(tokens[1]).join(tokens[2]);
      }
  }
  console.log(`The decrypted message is: ${result}`)

}
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ])
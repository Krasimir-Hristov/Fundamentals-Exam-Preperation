function solve(arr) {
 let str = arr.shift()

 for(const line of arr){
   let [command, a, b] = line.split(`:|:`);
   if (command ===  "InsertSpace") {
     str = str.substring(0, a) + ` ` + str.substring(a);
     console.log(str);

   }else if ( command === `Reverse`) {
     if(str.includes(a)) {
       let index = str.indexOf(a);
       let reversed = a.split(``).reverse().join(``)
       str = str.substring(0, index) + str.substring(index + a.length) + reversed;
       console.log(str);
     } else {
       console.log(`error`);
      
     }
   } else if (command === `ChangeAll`) { 
     str = str.split(`${a}`).join(`${b}`);
     console.log(str);
   }
  
 }

 console.log(`You have a new text message: ${str}`);
}
solve([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal'
])
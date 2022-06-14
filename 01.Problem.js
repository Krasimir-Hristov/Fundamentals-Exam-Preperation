function solve(input) {
let spell = input.shift();

 while(input[0] != "Abracadabra") {
     let [ command, p1, p2] = input.shift().split(` `);
     
     if(command == "Abjuration") {
         spell = spell.toUpperCase();
         console.log(spell)

     } else if(command == "Necromancy") {
         spell = spell.toLowerCase();
         console.log(spell);

     } else if (command == `Illusion`) {
         p1 = Number(p1);
         if(p1 >= 0 && p1 <= spell.length -1) {
             let left = spell.slice(0,p1);
             let right = spell.slice(p1 + 1);
             spell = left + p2 + right;
             console.log(`Done!`);
         } else {
             console.log("The spell was too weak.");
         }
     } else if (command == `Divination`) {
         if(spell.includes(p1)) {
           spell =  spell.split(p1).join(p2);
           console.log(spell);
           
         }
     } else if (command === `Alteration`) {
         if(spell.includes(p1)) {
             let index = spell.indexOf(p1);
             
             let left = spell.slice(0,index);
             
             
             
             let rigth = spell.slice(index + p1.length);
             
             spell = left + rigth;
             console.log(spell);

         }
     } else {
         console.log("The spell did not work!");
     }
 }



}
solve(["A7ci0",
"Illusion 1 c",
"Illusion 4 o",
"Abjuration",
`Divination C T`,
"Abracadabra"]);

// solve(["TR1GG3R",
// "Necromancy",
// "Illusion 8 m",
// "Illusion 9 n",
// "Abracadabra"]);

// solve(["SwordMaster",
// "Target Target Target",
// "Abjuration",
// "Necromancy",
// "Alteration master",
// "Abracadabra"]);
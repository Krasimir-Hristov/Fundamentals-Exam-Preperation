function solve(input){
let list = input.shift().split("!");

let inputL = input.length;

let currentComand = input.shift()
while(currentComand !== `Go Shopping!`){
    let [command, product1, product2] = currentComand.split(` `)

    if(command === `Urgent`){
        
        if(list.indexOf(product1) === -1){
            list.unshift(product1);
        }
    }else if(command === `Unnecessary`){
        let index = list.indexOf(product1);
         if(index !== -1){
             list.splice(index, 1);
         }
         
    }else if(command === `Correct`){
        let index = list.indexOf(product1);
        if(index !== -1){
            list.splice(index, 1, product2);
        }
    }else if(command === `Rearrange`){
        let index = list.indexOf(product1);
        if(index !== -1){
            let temp = list.splice(index, 1);
            list.push(temp[0])
            
        }
    }



    currentComand = input.shift()
}


console.log(list.join(`, `))
}
solve([
    'Tomatoes!Potatoes!Bread',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!'
  ]);

  //solve([
//     'Milk!Pepper!Salt!Water!Banana!','Urgent Salt','Unnecessary Grapes ','Correct Pepper Onion','Rearrange Grapes','Correct Tomatoes Potatoes','Go Shopping!'
//   ])
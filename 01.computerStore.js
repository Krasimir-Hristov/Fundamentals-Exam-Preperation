function solve(input){
    let customer = input.pop();
    let arrToNum = input.map(Number);
    
    let sum = 0;
    let taxesProcent = 1.20;

    for(let part of arrToNum){
        if(part < 0){
            console.log(`Invalid price!`);
            continue;
        }
        sum += part
    }

    let priceWithTaxes = sum * taxesProcent;
    let taxesOnly = priceWithTaxes - sum;
    if(customer === `special`){
        priceWithTaxes *= 0.90
    }

   if(priceWithTaxes > 0){
    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${sum.toFixed(2)}$
    Taxes: ${taxesOnly.toFixed(2)}$
    -----------
    Total price: ${priceWithTaxes.toFixed(2)}$`)

   }else{
       console.log(`Invalid order!`)
   }
}
solve([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ]);

    solve([
        '1023', 
        '15', 
        '-20',
        '-5.50',
        '450', 
        '20', 
        '17.66', 
        '19.30', 'regular'
        ]);


    
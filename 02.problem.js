function solve(input) {
    let n = Number(input.shift());
    let pattern =
        /(\w+|.+)>(\d{3})\|([a-z]{3})\|([A-Z]{3})\|(\w|.{3}|[\w+|.+]{3})<\1/;

    while (n > 0) {
        let barcode = input.shift();
        let match = pattern.exec(barcode);
        if (match) {
            console.log(`Password: ${match[2] + match[3] + match[4] + match[5]}`);
        } else {
            console.log(`Try another password!`);
        }
        n--;
    }
}
solve([
    "3",
    "##>00|no|NO|!!!?<###",
    "##>123|yes|YES|!!!<##",
    "$$<111|noo|NOPE|<<>$$",
]);

solve([
    "5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",  
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*",
]);

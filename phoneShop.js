

function solve(input) {

  let phoneList = input.shift().split(", ");

  let inputL = input.length;

  let phone = "";

  let index = 0;

 

  for (let i = 0; i < inputL; i++) {

    let line = input[i].split(" - ");

    let command = line[0];

    switch (command) {

      case "Add":

        phone = line[1];

        if (!phoneList.includes(phone)) {

          phoneList.push(phone);

        }

        break;

      case "Remove":

        phone = line[1];

        if (phoneList.includes(phone)) {

          index = phoneList.indexOf(phone);

          phoneList.splice(index, 1);

        }

        break;

      case "Bonus phone":

        let bonusPhone = line[1].split(":");

        let oldPhone = bonusPhone[0];

        let newPhone = bonusPhone[1];

        if (phoneList.includes(oldPhone)) {

          index = phoneList.indexOf(oldPhone);

          phoneList.splice(index + 1, 0, newPhone);

        }

        break;

      case "Last":

        phone = line[1];

        index = phoneList.indexOf(phone);

        phoneList.push(phone);

        phoneList.splice(index, 1);

        break;

      case "End":

        console.log(phoneList.join(", "));

    }

  }

}

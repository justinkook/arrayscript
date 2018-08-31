const employeeList = [{
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

const userInput = prompt('enter command');
if (userInput === 'print') {
  //for loop to print all the values in employeeList
  for (i = 0; i < employeeList.length; i++) {
    render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
  }
}
if (userInput === 'verify') {
  let message = 'no';
  const verifyInfo = prompt('user name');
  for (i = 0; i < employeeList.length; i++) {
    if (verifyInfo === employeeList[i].name) {
      message = 'yes';
    }
  }
  //render is outside loop to stop looping i employeeList.length times. So 5 yes etc
  render(message);
}
if (userInput === 'lookup') {
  const verifyInfo = prompt('user name');
  for (i = 0; i < employeeList.length; i++) {
    //simple lookup to see if name is on the employeeList
    if (verifyInfo === employeeList[i].name) {
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
  }
}
if (userInput === 'contains') {
  const verifyInfo = prompt('string');
  for (i = 0; i < employeeList.length; i++) {
    //need .lowerCase as javascript is case sensative 
    if (employeeList[i].name.toLowerCase().includes(verifyInfo)) {
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
  }
}
if (userInput === 'delete') {
  const verifyInfo = prompt('name to delete');
  for (i = 0; i < employeeList.length; i++) {
    if (verifyInfo === employeeList[i].name) {
      console.log(i);
      employeeList.splice(i, 1);
      for (i = 0; i < employeeList.length; i++) {
        render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
      }
    }
  }
}
if (userInput === 'update') {
  const name1 = prompt('name in array');

  for (i = 0; i < employeeList.length; i++) {
    //if the employee name exists in the employeeList
    if (name1 === employeeList[i].name) {
      const verifyField = prompt('name,officeNum,phoneNum');
      if (verifyField === 'name') {
        const verifyValue = prompt('value');
        employeeList[i].name = verifyValue;
        console.log(employeeList[i].name);
        render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
        // if the field prompt equals officeNum string
      } else if (verifyField === 'officeNum') {
        const verifyValue = prompt('value');
        //set old equal to new value
        employeeList[i].officeNum = verifyValue;
        render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
        // if the field prompt equals phoneNum string
      } else if (verifyField === 'phoneNum') {
        const verifyValue = prompt('value');
        employeeList[i].phoneNum = verifyValue;
        render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
      }
    }
  }
}

if (userInput === 'add') {
  const verifyName = prompt('name');
  const verifyOffice = prompt('officenumber');
  const verifyPhone = prompt('phonenumber');
  //making a new object with the prompts
  const newInput = [{
    name: verifyName,
    officeNum: verifyOffice,
    phoneNum: verifyPhone,
  }]
  employeeList.push(newInput);
  //renders the updated list
  for (i = 0; i < employeeList.length; i++) {
    render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
  }
}
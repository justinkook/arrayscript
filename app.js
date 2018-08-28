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
  render(message);
}
if (userInput === 'lookup') {
  const verifyInfo = prompt('user name');
  for (i = 0; i < employeeList.length; i++) {
    if (verifyInfo === employeeList[i].name) {
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
  }
}
if (userInput === 'contains') {
  const verifyInfo = prompt('string');
  for (i = 0; i < employeeList.length; i++) {
    console.log(employeeList[i].name);
    console.log('very',verifyInfo);
    if (employeeList[i].name.toLowerCase().includes(verifyInfo)) {
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
  }
}
if (userInput === 'delete') {
  const verifyInfo = prompt('name to delete');
  for (i = 0; i < employeeList.length; i++) {
    if (verifyInfo === employeeList[i].name) {
      employeeList[i].splice(verifyInfo);
    }
  } render(employeeList);
} 

var title = function (title) {
    console.log('');
    console.log(`=============${title}=============`);
}

//Ex1 - 建立Object物件
var obj = new Object();
var object = {};  //object literals

//用Object持有資料
var person = {
  name: "Kevin",
  email: "kevin@gmail.com",
  phone: "0922-155342"
}

//Ex2 - 存取物件屬性
title('存取物件屬性');
console.log(`${person.name}, ${person.email}, ${person.phone}`);
console.log(`${person["name"]}, ${person["email"]}, ${person["phone"]}`);


var employee = {
  name: "Kevin",
  email: "kevin@gmail.com",
  title: "Developer",
  phone: {
    home: "(03)366-4946",
    office: "(03)342-5178",
    mobile: "0922-155342"
  }
}

//Ex 2 - title('存取物件屬性 - employee['phone']['mobile']');
console.log(employee.phone.home + ", " + employee['phone']['mobile']);

//Ex3 - 用for...in迭代Object屬性
title('用for...in迭代Object屬性');
for (const prop in employee) {
  console.log(`${prop}`);
}

for (const prop in employee) {
  console.log(`employee.${prop}:${employee[prop]}`);
}


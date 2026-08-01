//console.log("hii");


// localStorage.setItem("name","nimal") // data add karanawa
// localStorage.setItem("name1","dinuka")
// localStorage.setItem("name2","chamod")
// localStorage.setItem("name3","lakshan")

// localStorage.removeItem("name2") // name2 eka remove wenawa


// let custName = localStorage.getItem("name")

// console.log(custName);

//================================================================
localStorage.clear()

let customer = {
    name: "kamal",
    age: 20,
    inActive:true
}

let car = {
    name:"TOYOTA",
    age:20
}

let stringCustomer = JSON.stringify(customer)

localStorage.setItem("customer",stringCustomer)

let reCustomer = localStorage.getItem("customer")

 let JsonCustomer = JSON.parse(reCustomer)

 console.log(JsonCustomer);
 
//----------------------------------------------------------

 let stringCar = JSON.stringify(car)

 localStorage.setItem("car",stringCar)

 let reCar = localStorage.getItem("car")

let jsonCar = JSON.parse(reCar)

  console.log(jsonCar);
  
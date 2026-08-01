//console.log("hii");


// localStorage.setItem("name","nimal") // data add karanawa
// localStorage.setItem("name1","dinuka")
// localStorage.setItem("name2","chamod")
// localStorage.setItem("name3","lakshan")

// localStorage.removeItem("name2") // name2 eka remove wenawa


// let custName = localStorage.getItem("name")

// console.log(custName);

//================================================================
// localStorage.clear()

// let customer = {
//     name: "kamal",
//     age: 20,
//     inActive:true
// }

// let car = {
//     name:"TOYOTA",
//     age:20
// }

// let student = {
//     name:"dinuka",
//     age:22,
//     payment:false
// }

// let stringCustomer = JSON.stringify(customer)

// localStorage.setItem("customer",stringCustomer)

// let reCustomer = localStorage.getItem("customer")

//  let JsonCustomer = JSON.parse(reCustomer)

//  console.log(JsonCustomer.name);

//----------------------------------------------------------

//  let stringCar = JSON.stringify(car)

//  localStorage.setItem("car",stringCar)

//  let reCar = localStorage.getItem("car")

// let jsonCar = JSON.parse(reCar)

//   console.log(jsonCar.name);

//-------------------------------------------------------

//   let stringStudent = JSON.stringify(student)

//   localStorage.setItem("student",stringStudent)

//   let reStudent = localStorage.getItem("student")

//   let jsonStudent = JSON.parse(reStudent)

//   console.log(jsonStudent.name);

//-------------------------------------------------------------


const customerList = []

function btnAddCustomerOnAction() {
    let customer = {
        id:document.getElementById("txtCustomerId").value,
        name:document.getElementById("txtCustomerName").value,
        age:document.getElementById("txtCustomerAge").value,
        address:document.getElementById("txtCustomerAddress").value
    }

    console.log(customer);

    customerList.push(customer)

    console.log(customerList);

    localStorage.setItem("customerList",JSON.stringify(customerList))
    
    
}

function btnSearchByIdOnAction() {
    alert("Search customer")
}

function btnDeleteByIdOnAction() {
    alert("Delete customer")
}

function btnUpdateByIdOnAction() {
    alert("Update customer")
}

function btnClearStorgeOnAction() {
    localStorage.clear()
}

function btnLoadTableOnAction() {
    alert("Load Table")
}





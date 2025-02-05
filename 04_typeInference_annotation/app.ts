let a:number|boolean|string;

// Interfaces and Type Aliases
// =>Defining interfaces ✔
// =>Using interfaces to define object shapes
// =>Extending interfaces
// =>Type aliases
// =>Intersection types

interface User{
  name:string,
  email:string,
  password:string,
  gender?:string  //gender?: means its optional if the gender data is not given there is no problem
}

function getDataOfUser(obj:User){
    console.log(obj.email)
}

getDataOfUser({name:"harsh",email:"harsh@gmail.com",password:"123"})


// Extending interfaces

interface User{
  name:string,
  email:string,
  password:string
}

interface Admin extends User{
  admin:boolean;
}

function newFn(obj:Admin){
  console.log(obj.admin)
}

newFn({name:"harsh",email:"harsh@gmail.com",password:"123456",admin:true})

// Fundamental of Type aliases

type value=string|number|null

let newData:value

// Union and Intersection types

type user={
  name:string,
  email:string
}









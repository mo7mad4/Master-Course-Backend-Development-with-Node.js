firstName = "Mohammed";
var firstName = 'mohammed'
let lastName = 'Raida'
const midName = 'Zeyad'

console.log("THe result firstName : ", firstName)

/////////// Loop ////////////////

let arr = ['A','B','C'];
// forEach
arr.forEach(elements=>{
    console.log(elements)
})

/////////// function //////////

function sum(a,b){
    return a+b
}

console.log(sum(5,9))


const multiply = (c,v) => c*v;


console.log(multiply(5,5))

/////////// object ////////////

const person = {
    firstName: "Moh",
    midName:"Zeyad",
    lastName:"Raida",
    gpa:80,
    fullName: function(){
        return `${this.firstName} ${this.midName} ${this.lastName}`
    }
}

console.log(person.fullName())
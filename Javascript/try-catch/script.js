let a = prompt("enter first number")
let b = prompt("enter second number")
let sum = parseInt(a) + parseInt(b)
let x=2
try {
    console.log("the sum is", +sum*x)
} catch (error) {
    console.log("unable to try")   
}
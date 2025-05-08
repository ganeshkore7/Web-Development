function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}

console.log("Loading modules")

console.log("Do something else")

console.log("load data")

let data = getData()
data.then((v) => {

    console.log(data)

    console.log("process data")
})
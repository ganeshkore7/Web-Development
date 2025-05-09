import fs from "fs/promises"

let a = await fs.readFile("ganesh1.txt")

console.log(a.toString())


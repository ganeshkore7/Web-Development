//CRUD(Create,Run,Update,Delete)operations 

use("CrudDb")
//create db or collection
console.log(db)
db.createCollection("courses")

//run db or collection
// db.courses.insertOne({
//     name: "Ganesh",
//     rollno: "5D0",
//     course: "web development"
// })

// db.courses.insertMany([
//     {
//         "name": "bhasker",
//         "rollno": "5D1",
//         "course": "app development"
//     },

//     {
//         "name": "lalith",
//         "rollno": "5D5",
//         "course": "java developer"
//     }
// ])

// db.courses.insertMany([


//     {
//         "name": "Ananya",
//         "rollno": "5D2",
//         "course": "Web Development"
//     },
//     {
//         "name": "Rohit",
//         "rollno": "5D3",
//         "course": "Data Science"
//     },
//     {
//         "name": "Sneha",
//         "rollno": "5D4",
//         "course": "Cyber Security"
//     },
//     {
//         "name": "Arjun",
//         "rollno": "5D5",
//         "course": "AI & ML"
//     }


// ])

// let a = db.courses.find({ course: "Web Development" })
// console.log(a)

// console.log(a.toArray())

// let b = db.courses.findOne({ rollno: "5D5"})
// console.log(b)

//update db or collection
// db.courses.updateOne({ course: "web development" },
//     { $set: { course: "MERN stack" } }
// )

// db.courses.updateMany({ course: "web development" },
//     { $set: { course: "MERN stack" } }
// )


//delete db or collection
db.courses.deleteOne({ course: "MERN stack" })

db.courses.deleteMany({ course: "MERN stack" })



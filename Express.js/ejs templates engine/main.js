const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.render('templates/bootstrap.html', {root: __dirname})
// })

app.get('/', (req, res) => {
    let siteName = "adidas"
    let searchText = "search here"
    let arr = ["hey" , "hello" , "hi" ]
    res.render('bootstrap', { siteName:siteName, searchText:searchText, arr })
})

// app.get('/blog/:slug', (req, res) => {
//     let blogTitle = "The title of the blog"
//     let blogContent = "The content of the blog"
//     res.render('blog', { blogTitle, blogContent })
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})






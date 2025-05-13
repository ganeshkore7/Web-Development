const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
    console.log('This is a get reuest')
  res.send('Get Hello World!')
})

app.post('/', (req, res) => {
    console.log('This is a Post request')
    res.send('Post Hello World!')
  })
  app.put('/', (req, res) => {
    console.log('This is a Put request')
    res.send('Put Hello World!')
  })

  app.get('/about', (req, res) => {
    console.log('This is a about')
    res.sendFile('templates/about.html', {root: __dirname})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

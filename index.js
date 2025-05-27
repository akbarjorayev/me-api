const express = require('express')
const app = express()

app.get('/me', (req, res) => {
  res.send("Akbar's endpoint")
})

app.listen(3002, () => {
  console.log('Server is listening on port 3002')
})

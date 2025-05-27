const express = require('express')
const cors = require('cors')
const app = express()

app.use(
  cors({
    origin: ['http://147.182.192.140'],
  })
)

app.get('/me', (req, res) => {
  res.send("Akbar's endpoint")
})

app.listen(3002, () => {
  console.log('Server is listening on port 3002')
})

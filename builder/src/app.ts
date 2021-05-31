import express from 'express'

const app = express()
const PORT = 3002

app.get('/', (req, res) => {
  res.send(`Order Api ${process.env.ENV_NAME}`)
})
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})

import express from 'express'
import routes from './routes/routers'

const app = express()
const PORT = 3001
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(routes)
app.get('/', (req, res) => {
  res.send(`Users Api ${process.env.ENV_NAME}`)
})
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})

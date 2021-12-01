const express = require('express')
const teamRoute = require('./route/team.route')

const app = express()
app.use(express.json())
app.use('/team', teamRoute)

app.get('/', (req, res) => {
  res.send('Prova 02!')
})

const PORT = 6565

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})

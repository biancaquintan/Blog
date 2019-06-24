const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Funcionando...')
})

const rotas = require('./rotas')
app.use('/api', rotas)

const port = 3001

app.listen(port, () => {
    console.log('O servidor está rodando em http://localhost:', port)
})
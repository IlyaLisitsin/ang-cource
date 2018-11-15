const express = require('express')
const bodyParser = require('body-parser')
const FileService = require('./fileService')

const courcesUrl = __dirname + '/cources.json'

const app = express()
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE, OPTIONS')
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const courcesJsonService = new FileService()

app.get('/api/getCourceList', (req, res) => courcesJsonService.getAll(courcesUrl, res))

app.post('/api/addCource', (req, res) => courcesJsonService.addNew(courcesUrl, res, req.body))

app.put('/api/removeCource', ({ body: {idToRemove} }, res) =>courcesJsonService.removeCurrent(courcesUrl, res, idToRemove))

app.listen(8080)

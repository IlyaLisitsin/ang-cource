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

const courcesJsonService = new FileService(courcesUrl)

app.get('/api/cources', (req, res) => courcesJsonService.getAll(req, res))

app.get('/api/cources/:id', ({ params: {id} }, res) => courcesJsonService.getParticular(id, res))

app.put('/api/cources', (req, res) => courcesJsonService.addNew(res, req.body))

app.delete('/api/cources/:id',({ params: {id} }, res) => courcesJsonService.removeCurrent(res, id))

app.listen(8080)

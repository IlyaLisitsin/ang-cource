const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')

const courcesUrl = __dirname + '/cources.json'

const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/getCourceList', (req, res) => {
  fs.readFile(courcesUrl, (err, data) => {
    if (err) throw err;
    res.send(data)
  });
})

app.post('/api/addCource', (req, res) => {
  const newCource = req.body

  fs.readFile(courcesUrl, (err, data) => {
    if (err) throw err;

    const { courcesList } = JSON.parse(data)

    courcesList.push(newCource)
    const updatedCourceList = {
      courcesList
    }

    fs.writeFile(courcesUrl, JSON.stringify(updatedCourceList), (err) => {
      if (err) throw err;
      res.send(JSON.stringify(updatedCourceList))
    });
  })
})

app.listen(8080)

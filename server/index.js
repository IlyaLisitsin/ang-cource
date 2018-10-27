const express = require('express')
const os = require('os')

const courcesCollection = [
  { id: 1, title: 'Title 3', creation: new Date(2018, 7,20), duration: 95, description: 'Description 3', topRated: true },
  { id: 2, title: 'Title 3', creation: new Date(2018, 7,20), duration: 35, description: 'Description 3', topRated: false },
  { id: 3, title: 'Title 2', creation: new Date(2018, 9,7), duration: 55, description: 'Description 2', topRated: false },
  { id: 4, title: 'Title 3', creation: new Date(2018, 8,6), duration: 135, description: 'Description 3', topRated: false },
  { id: 5, title: 'Title 3', creation: new Date(2018, 7,20), duration: 235, description: 'Description 3', topRated: false },
  { id: 6, title: 'Title 3', creation: new Date(2018, 7,24), duration: 45, description: 'Description 3', topRated: true },
  { id: 7, title: 'Title 3', creation: new Date(2018, 7,25), duration: 65, description: 'Description 3', topRated: true },
  { id: 8, title: 'Title 4', creation: new Date(2011, 1,20), duration: 125, description: 'Description 4', topRated: false },
  { id: 9, title: 'Title 1', creation: new Date(2018, 8,15), duration: 432, description: 'Description 1', topRated: false },
]


const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.get('/api/getUsername', (req, res) => res.send({ courcesCollection }))

app.listen(8080, () => console.log('Listening on port 8080!'))

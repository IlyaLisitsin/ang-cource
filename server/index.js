const express = require('express')
const os = require('os')

const app = express()

app.get('/api/getUsername', (req, res) => {
  req.header('Access-Control-Allow-Origin', '*')
  return res.send({ username: os.userInfo().username })
})
app.listen(8080, () => console.log('Listening on port 8080!'))

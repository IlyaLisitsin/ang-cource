const fs = require('fs')

class FileService {
  constructor(path) {
    this.path = path
  }

  getAll(req, res) {
    fs.readFile(this.path, (err, data) => {
      if (err) res.send(`Server error have been occured: ${err}`)
      if (req.query.id) {
        const { courcesList } = JSON.parse(data)

        const particularCource = courcesList.find(cource => cource.id === req.query.id)

        res.send(particularCource)
        return
      }

      res.send(data)
    })
  }

  addNew(res, newCource) {
    fs.readFile(this.path, (err, data) => {
      if (err) res.send(`Server error have been occured: ${err}`)

      let { courcesList } = JSON.parse(data)

      if (courcesList.find(cource => cource.id === newCource.id)) {
        courcesList = courcesList.map(cource => cource.id === newCource.id ? newCource : cource)
      } else {
        courcesList.push(newCource)
      }

      const updatedCourceList = {
        courcesList
      }

      fs.writeFile(this.path, JSON.stringify(updatedCourceList), (err) => {
        if (err) res.send(`Server error have been occured: ${err}`)
        res.json(updatedCourceList)
      })
    })
  }

  removeCurrent(res, idToRemove) {
    fs.readFile(this.path, (err, data) => {
      if (err) res.send(`Server error have been occured: ${err}`)

      const { courcesList } = JSON.parse(data)

      const updatedCourceList = {
        courcesList: courcesList.filter(cource => cource.id !== idToRemove)
      }

      fs.writeFile(this.path, JSON.stringify(updatedCourceList), (err) => {
        if (err) res.send(`Server error have been occured: ${err}`)
        res.json(updatedCourceList)
      });
    })
  }
}

module.exports = FileService

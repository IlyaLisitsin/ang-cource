const fs = require('fs')

class FileService {
  constructor(path) {
    this.path = path
  }

  getAll(res) {
    fs.readFile(this.path, (err, data) => {
      if (err) res.send(`Server error have been occured: ${err}`)
      res.send(data)
    })
  }

  addNew(res, newCource) {
    fs.readFile(this.path, (err, data) => {
      if (err) res.send(`Server error have been occured: ${err}`)

      const { courcesList } = JSON.parse(data)

      courcesList.push(newCource)
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

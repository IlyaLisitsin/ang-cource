const fs = require('fs')

class FileService {
  getAll(path, res) {
    fs.readFile(path, (err, data) => {
      if (err) res.send(`Server error have been occured: ${err}`)
      res.send(data)
    })
  }

  addNew(path, res, newCource) {
    fs.readFile(path, (err, data) => {
      if (err) throw err

      const { courcesList } = JSON.parse(data)

      courcesList.push(newCource)
      const updatedCourceList = {
        courcesList
      }

      fs.writeFile(path, JSON.stringify(updatedCourceList), (err) => {
        if (err) throw err
        res.json(updatedCourceList)
      })
    })
  }

  removeCurrent(path, res, idToRemove) {
    fs.readFile(path, (err, data) => {
      if (err) throw err;

      const { courcesList } = JSON.parse(data)

      const updatedCourceList = {
        courcesList: courcesList.filter(cource => cource.id !== idToRemove)
      }

      fs.writeFile(path, JSON.stringify(updatedCourceList), (err) => {
        if (err) throw err;
        res.json(updatedCourceList)
      });
    })
  }
}

module.exports = FileService

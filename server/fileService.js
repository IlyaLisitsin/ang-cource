const fs = require('fs')

class FileService {
  constructor(path) {
    this.path = path
  }

  getAll(req, res) {
    fs.readFile(this.path, (error, data) => {
      if (error) res.send({ error: `Server erroror have been occured: ${error}` })
      res.send(data)
    })
  }

  getParticular(id, res) {
    fs.readFile(this.path, (error, data) => {
      if (error) res.send({ error: `Server erroror have been occured: ${error}` })
        const { courcesList } = JSON.parse(data)

        const particularCource = courcesList.find(cource => cource.id === id)

        res.send(particularCource)
    })

  }

  addNew(res, newCource) {
    fs.readFile(this.path, (error, data) => {
      if (error) res.send({ error: `Server erroror have been occured: ${error}` })

      let { courcesList } = JSON.parse(data)

      if (courcesList.find(cource => cource.id === newCource.id)) {
        courcesList = courcesList.map(cource => cource.id === newCource.id ? newCource : cource)
      } else {
        courcesList.push(newCource)
      }

      const updatedCourceList = {
        courcesList
      }

      fs.writeFile(this.path, JSON.stringify(updatedCourceList), (error) => {
        if (error) res.send({ error: `Server erroror have been occured: ${error}` })
        res.json(updatedCourceList)
      })
    })
  }

  removeCurrent(res, idToRemove) {
    fs.readFile(this.path, (error, data) => {
      if (error) res.send({ error: `Server erroror have been occured: ${error}` })

      const { courcesList } = JSON.parse(data)

      const updatedCourceList = {
        courcesList: courcesList.filter(cource => cource.id !== idToRemove)
      }

      fs.writeFile(this.path, JSON.stringify(updatedCourceList), (error) => {
        if (error) res.send({ error: `Server erroror have been occured: ${error}` })
        res.json(updatedCourceList)
      });
    })
  }
}

module.exports = FileService

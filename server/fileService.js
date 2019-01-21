const fs = require('fs');
const logger = require('./logger');

class FileService {
  constructor(path) {
    this.path = path
  }

  getAll(req, responseCb) {
    fs.readFile(this.path, (error, data) => {
      if (error) responseCb(null, error);
      responseCb(data)
    })
  }

  getParticular(id, responseCb) {
    fs.readFile(this.path, (error, data) => {
      if (error) responseCb(null, error);
      const { courcesList } = JSON.parse(data);

      const particularCource = courcesList.find(cource => cource.id === id);

      logger.info(id);

      responseCb(particularCource)
    })

  }

  addNew(newCource, responseCb) {
    fs.readFile(this.path, (error, data) => {
      if (error) responseCb(null, error);

      let { courcesList } = JSON.parse(data);

      if (courcesList.find(cource => cource.id === newCource.id)) {
        courcesList = courcesList.map(cource => cource.id === newCource.id ? newCource : cource)
      } else {
        courcesList.push(newCource)
      }

      const updatedCourceList = {
        courcesList
      };

      fs.writeFile(this.path, JSON.stringify(updatedCourceList), (error) => {
        if (error) responseCb(null, error);
        responseCb(updatedCourceList)
      })
    })
  }

  removeCurrent(idToRemove, responseCb) {
    fs.readFile(this.path, (error, data) => {
      if (error) responseCb(null, error);

      const { courcesList } = JSON.parse(data);

      const updatedCourceList = {
        courcesList: courcesList.filter(cource => cource.id !== idToRemove)
      };

      fs.writeFile(this.path, JSON.stringify(updatedCourceList), (error) => {
        if (error) responseCb(null, error);
        responseCb(updatedCourceList)
      });
    })
  }
}

module.exports = FileService;

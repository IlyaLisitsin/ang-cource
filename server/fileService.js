const fs = require('fs');
const logger = require('./logger');

class FileService {
  constructor(path) {
    this.path = path
  }

  generatePageInfo(actualCourceList, page, size) {
    return {
      totalCources: actualCourceList.length,
      totalPages: Math.round(actualCourceList.length / size),
      currentPage: Number(page),
    }
  }

  getCources(req, responseCb) {
    const { page, size } = req.query;

    fs.readFile(this.path, (error, data) => {
      if (error) responseCb(null, error);
      if (page && size) {
        const { courcesList } = JSON.parse(data);

        const courcesRange = courcesList.slice(Number(page - 1) * Number(size), Number(page - 1) * Number(size) + Number(size));

        responseCb({ courcesList: courcesRange, pageInfo: this.generatePageInfo(courcesList, page, size)})
      } else responseCb(data)
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

  removeCurrent(req, responseCb) {
    const { page, size } = req.query;
    const idToRemove = req.params.id;

    fs.readFile(this.path, (error, data) => {
      if (error) responseCb(null, error);

      let { courcesList } = JSON.parse(data);

      courcesList = courcesList.filter(cource => cource.id !== idToRemove)
      const updatedCourceListForFile = {
        courcesList
      };

      fs.writeFile(this.path, JSON.stringify(updatedCourceListForFile), (error) => {
        if (error) responseCb(null, error);

        const courcesRange = courcesList.slice(Number(page - 1) * Number(size), Number(page - 1) * Number(size) + Number(size));

        console.log(this.generatePageInfo(courcesList, page, size))
        responseCb({ courcesList: courcesRange, pageInfo: this.generatePageInfo(courcesList, page, size) })
      });
    })
  }
}

module.exports = FileService;

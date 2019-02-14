const fs = require('fs');
const logger = require('./logger');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courceSchema = new Schema({
  title: String,
  duration: String,
  creation: String,
  topRated: Boolean,
  description: String,
});

const Cource = mongoose.model('Cource', courceSchema);
// const TestCource = new Cource({
//   title: 'test title',
//   duration: '12323',
//   creation: 'test',
//   topRated: true,
//   description: 'test',
// })

// TestCource.save((err, wut) => console.log(2343323242, wut))

mongoose.connect('mongodb+srv://Ilya:Ilya@cluster0-9mimi.mongodb.net/cources-project',  { useNewUrlParser: true });
const { connection } = mongoose;
connection.on('error', console.error.bind(console, 'connection error:'));

class FileService {
  constructor(path) {
    this.path = path
  }

  generatePageInfo(actualCourceList, page, size) {
    return {
      totalCources: actualCourceList,
      totalPages: Math.round(actualCourceList / size),
      currentPage: Number(page),
    }
  }

  getCources(req, responseCb) {
    let { page, size } = req.query;
    page = Number(page);
    size = Number(size)

    connection.db.collection('courceslist', (err, collection) => {
      collection.countDocuments()
        .then(count => {
          collection.find({}).skip((page - 1) * size).limit(size).toArray()
          .then((data) => responseCb({ courcesList: data, pageInfo: this.generatePageInfo(count, page, size)}))
      })
        .catch(err => responseCb(null, err))
    });
  }

  searchCources(req, responseCb) {
    const { query } = req.query;

    fs.readFile(this.path, (error, data) => {
      if (error) responseCb(null, error);
      const { courcesList } = JSON.parse(data);

      const courcesFittingSearchQuery = courcesList.filter(cource => cource.title.search(query) !== -1);

      responseCb({ courcesSearchResults: courcesFittingSearchQuery })
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

        responseCb({ courcesList: courcesRange, pageInfo: this.generatePageInfo(courcesList, page, size) })
      });
    })
  }
}

module.exports = FileService;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courceSchema = new Schema({
  title: String,
  duration: String,
  creation: String,
  topRated: Boolean,
  description: String,
}, { collection: 'courceslist', versionKey: false });

const Cource = mongoose.model('Cource', courceSchema);

mongoose.connect('mongodb+srv://Ilya:Ilya@cluster0-9mimi.mongodb.net/cources-project',  { useNewUrlParser: true, autoIndex: false });
const { connection } = mongoose;
connection.on('error', console.error.bind(console, 'connection error:'));

class FileService {
  constructor(path) {
    this.path = path
  }

  generatePageInfo(amountOfCources, page, size) {
    return {
      totalCources: amountOfCources,
      totalPages: Math.ceil(amountOfCources / size),
      currentPage: Number(page),
    }
  }

  getCources(req, responseCb) {
    let { page, size } = req.query;
    page = Number(page);
    size = Number(size);

    Cource.find({}, (err, collection) => {
      if(err) return console.log(err);
      const courcesRange = collection.slice((page - 1) * size, (page - 1) * size + size);
      responseCb({ courcesList: courcesRange, pageInfo: this.generatePageInfo(collection.length, page, size)})
    }).catch(err => responseCb(null, err));
  }

  searchCources(req, responseCb) {
    const { query } = req.query;

    connection.db.collection('courceslist', (err, collection) => {
      collection.createIndex({ title: "text" });
      collection.find({ "$text" : { "$search" : query }}).toArray()
        .then((data) => responseCb({ courcesSearchResults: data }))
        .catch(err => responseCb(null, err))
    });
  }

  getParticular(id, responseCb) {
    Cource.findById(id, (err, particularCource) => responseCb(particularCource))
  }

  addNew({ title, duration, creation, topRated, description }, responseCb) {

    const NewCource = new Cource({
      title,
      duration,
      creation,
      topRated,
      description,
    });

    NewCource.save();
    Cource.find({}, (err, collection) => {
      if (err) responseCb(null, err);
      responseCb(collection)
    })
  }

  editCource(updatedCource, responseCb) {
    const { _id } = updatedCource;

    Cource.findByIdAndUpdate(_id, updatedCource, () => Cource.find({}, (err, collection) => {
      if (err) responseCb(null, err);
      responseCb(collection)
    }));
  }

  removeCurrent(req, responseCb) {
    const { page, size } = req.query;
    const idToRemove = req.params.id;

    Cource.findByIdAndDelete(idToRemove, err => {
      if (err) responseCb(null, err);
      Cource.find({}, (err, collectionAfterRemove) => {
        const courcesRange = collectionAfterRemove.slice((page - 1) * size, (page - 1) * size + size);
        const pageInfo = this.generatePageInfo(collectionAfterRemove.length, page, size);
        responseCb({ courcesList: courcesRange, pageInfo })
      })
    });
  }
}

module.exports = FileService;

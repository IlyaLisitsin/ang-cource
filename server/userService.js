const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  username: {
    type: String,
    index:true
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  name: {
    type: String
  },
  surname: {
    type: String
  }
}, { collection: 'user', versionKey: false });

const User = mongoose.model('User', UserSchema);

class UserService {

  // createUser(newUser, callback){
  //   newUser.save(callback);
  // }

  // getUserById(id, callback) {
  //   User.findById(id, callback);
  // }

  getUserByUsername(username, callback) {
    const query = { username: username };
    User.findOne(query, callback);
  }

  localStrategyCb(username, password, done) {
    this.getUserByUsername(username, (err, user) => {
      if(err) throw err;
      if(!user){
        return done(null, false, { message: 'Unknown User' });
      }

      return password === user.password ?
        done(null, user) : done(null, false, { message: 'Invalid password' })
    });
  }
}

module.exports = UserService;

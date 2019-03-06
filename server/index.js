const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

const session = require('express-session');
const mongoose = require('mongoose');

const CourcesService = require('./courcesService');
const UserService = require('./userService');

const courcesService = new CourcesService();
const userService = new UserService();

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE, OPTIONS');
  next()
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb+srv://Ilya:Ilya@cluster0-9mimi.mongodb.net/cources-project', { useNewUrlParser: true, autoIndex: false });

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
  },
  userService.localStrategyCb.bind(userService)
));

app.get('/api/cources', (req, res) => courcesService.getCources(req, (data, err) => {
  if (err) res.next({ error: `Server erroror have been occured: ${err}` });
  res.send(data)
}));

app.get('/api/cources/search', (req, res) => courcesService.searchCources(req, (data, err) => {
  if (err) res.next({ error: `Server erroror have been occured: ${err}` });
  res.json(data)
}));

app.get('/api/cources/:id', ({ params: {id} }, res) => courcesService.getParticular(id, (data, err) => {
  if (err) res.next({ error: `Server erroror have been occured: ${err}` });
  res.json(data)
}));

app.put('/api/cources/add', (req, res) => courcesService.addNew(req.body, (data, err) => {
  if (err) res.next({ error: `Server erroror have been occured: ${err}` });
  res.json(data)
}));

app.put('/api/cources/edit', (req, res) => courcesService.editCource(req.body, (data, err) => {
  if (err) res.next({ error: `Server erroror have been occured: ${err}` });
  res.json(data)
}));

app.delete('/api/cources/:id', (req, res) => courcesService.removeCurrent(req, (data, err) => {
  if (err) res.next({ error: `Server erroror have been occured: ${err}` });
  res.json(data)
}));

// app.post('/api/register', function(req, res){
//   const password = req.body.password;
//   const password2 = req.body.password2;
//
//   if (password === password2){
//     const newUser = new User({
//       name: req.body.name,
//       email: req.body.email,
//       username: req.body.username,
//       password: req.body.password
//     });
//
//     User.createUser(newUser, function(err, user){
//       if(err) throw err;
//       res.send(user).end()
//     });
//   } else {
//     res.status(500).send("{errors: \"Passwords don't match\"}").end()
//   }
// });

app.post('/api/login', (req, res, next) => {
  passport.authenticate('local', function(err, user, info) {
    if (err) res.send({ error: `Server erroror have been occured: ${err}` });
    if (!user) res.send({ error: { statusText: 'Wrong user or password', message: 'Try again'} })
    else res.json(user)
  })(req, res, next);
});

app.listen(8080);

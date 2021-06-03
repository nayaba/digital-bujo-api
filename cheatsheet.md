## Creating a Schema in Mongoose
```js
import mongoose from 'mongoose';
const { Schema } = mongoose; // this is a destructured expression, which will allow us to import more than Schema from mongoose without having to define a new variable every time; we can simply add to Schema by separating with a comma

const blogSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

module.exports = mongoose.model('Blog', blogSchema)
```

## Using the express.Router class to create modular route handlers (callback functions)
```js
var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router
```
## Mongoose Creates and Automatically Pluralizes Your Collections For You
Mongoose pluralizes the model name and uses that as the collection name by defualt. If you don't want the default behavior, you can supply your own name:
```js
const UserModel = mongoose.model('User', new Schema({ ... }, { collection: 'Different_Name' }
```
## Ways to Use `Ref` in Mongoose
```js
const userSchema = new Schema({ name: String });
const User = mongoose.model('User', userSchema);

const postSchema = new Schema({ user: mongoose.ObjectId });
postSchema.path('user').ref('User'); // Can set ref to a model name
postSchema.path('user').ref(User); // Or a model class
postSchema.path('user').ref(() => 'User'); // Or a function that returns the model name
postSchema.path('user').ref(() => User); // Or a function that returns the model class

// Or you can just declare the `ref` inline in your schema
const postSchema2 = new Schema({
  user: { type: mongoose.ObjectId, ref: User }
});
```

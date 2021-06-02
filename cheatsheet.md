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

const express = require("express");
const bodyParser = require("body-parser");
const Post = require('./models/post');
const app = express();
const mongoose = require('mongoose');
//const postsRoutes = require("./routes/posts");

// connect to dabase mongodb with mongoose
mongoose
  .connect(
    "mongodb+srv://chrys:Gaelen08.@cluster0-wqts6.mongodb.net/node-angular?retryWrites=true", { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database!")
  })
  .catch(() => {
    console.log("What the hell Connection failed!");
  });



app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
                "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  post.save().then(createdPost =>{
    res.status(201).json({
      message: "post added successfully",
      postId: createdPost.id
    });
  });
});

app.get("/api/posts", (req, res, next) => {
  // API posts comments
  Post.find().then(documents => {
    res.status(200).json({
      message: ' Posts fetched with success',
      posts: documents
    });
  });
});

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
  });
  res.status(200).json({message: "Post deleted"});
});

module.exports = app;

const express = require("express");
const bodyParser = require("body-parser");
const Post = require('./models/post');
const app = express();
const mongoose = require('mongoose');
//const postsRoutes = require("./routes/posts");

// connect to dabase mongodb with mongoose
mongoose
  .connect(
    "mongodb+srv://chrys:Gaelen08.@cluster0-wqts6.mongodb.net/node-angular?retryWrites=true"
  )
  .then(() => {
    console.log("Connected to database!")
  })
  .catch(() => {
    console.log("Connection failed!");
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
    description: req.body.decription
  });
  post.save();
  res.status(201).json({
    message: "post added successfully"
  });
});

app.use("/api/posts", (req, res, next) => {
  // API posts comments
  const posts = [
    { id: "fqsljfqls",
      title: "title name test",
      description: "description test right here"
    },
    { id: "fqskkkksds",
      title: "title name test2",
      description: "description test right2 here"
    },
    { id: "fqddddds",
      title: "title name test3",
      description: "description test right3 here"
    },
  ];
  res.status(200).json({
    message: ' Posts fetched with success',
    posts: posts
  });
});




module.exports = app;

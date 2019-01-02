const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
                "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const posts= req.body;
  console.log(post);
  res.status(201).json({
    message: 'post added successfully'
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

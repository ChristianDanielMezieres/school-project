
const express = require('express');

const app = express();

app.use("/api/posts", (req, res, next) => {
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
    message: ' Posts appear with success',
    posts: posts
  });
});



module.exports = app;

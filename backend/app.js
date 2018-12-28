
const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

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
    message: ' Posts fetched with success',
    posts: posts
  });
});



module.exports = app;

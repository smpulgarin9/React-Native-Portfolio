const express = require("express");
const cors = require("cors");
const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());

const mDB = [
  {
    id: "1",
    author: "maria",
    content: "My first post",
    createdAt: new Date().toISOString(),
    updateAt: new Date().toISOString(),
  },
];

app.get("/", (req, res) => {
  // setTimeout(() => {
    // throw new Error();
    res.json(mDB);
  // }, 500);
});

app.post('/post', (req, res)=>{
  const newPost = {
    id: mDB.length + 1,
    author: req.body.author,
    content: req.body.content,
    createdAt: new Date().toISOString(),
    updateAt: new Date().toISOString(),
  }

  mDB.push(newPost);
  res.status(201).json(newPost);
});

app.put('/post/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = mDB.findIndex((post) => post.id == postId);

  if (postIndex > -1) {
    mDB[postIndex] = {
      ...mDB[postIndex],
      ...req.body,
      updateAt: new Date().toISOString(),
    }

    res.json(mDB[postIndex]);
  } else {
    res.status(404).send('Post not found')
  }
});

app.delete('/post/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = mDB.findIndex((post) => post.id == postId);

  if (postIndex > -1) {
    mDB.splice(postIndex, 1);
    res.status(200).send(`Post with id ${postId} deleted`);
  } else {
    res.status(204).send('Post not found');
  }
}); 

app.listen(port, () => {  
    console.log(`Example app listening at http://localhost:${port}`);
});
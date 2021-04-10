import express from 'express';
import authenticateToken from './authenticateToken';

const app = express();
app.use(express.json());

const posts = [
  { username: 'David', title: 'Post1' },
  { username: 'Andres', title: 'Post2' },
];

app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});

app.listen(3000);

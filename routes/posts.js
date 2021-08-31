const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//READ (get) all POSTS
router.get('/', async (req, res) => {
  try{
    const posts = await Post.find();
    res.json(posts);
  }catch(err){
    res.json({ message: err })
  }
});

//CREATE POSTS
router.post('/', async (req,res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category
  });
  try{
    const savePost = await post.save();
    res.json(savePost);
  }catch (err) {
    res.json({ message: err });
  }
});

//DELETE POST
router.delete('/:postId', (req,res) => {
  Post.remove({_id: req.params.postId})
});


module.exports = router;
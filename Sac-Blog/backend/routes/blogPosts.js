const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');

// Create a new blog post
router.post('/add', async (req, res) => {
  const { title, content, image } = req.body;

  try {
    const newPost = new BlogPost({
      title,
      content,
      image,
    });

    await newPost.save();
    res.status(201).json({ message: 'Blog post added successfully!', post: newPost });
  } catch (error) {
    console.error('Error saving the blog post:', error);
    res.status(500).json({ error: 'Server error. Could not save blog post.' });
  }
});

// Get all blog posts
router.get('/', async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog posts', error });
  }
});

// Get a single blog post by ID
router.get('/:id', async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    console.log("Fetching post with ID:", post);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching the blog post', error });
  }
});


module.exports = router;

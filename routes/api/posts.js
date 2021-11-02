const express = require('express');
const router = express.Router();


// posts Model
const Posts = require('../../models/Posts');


//@routes POST api/posts


router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find();
        if (!posts) throw Error('No Items');
        res.status(200).json(posts);
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})


router.post('/', async (req, res) => {
    const newPost = new Posts(req.body);

    try {
        const post = await newPost.save();
        if (!post) throw Error('something went wrong while saving posts')


        res.status(200).json(post);

    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const post = await Posts.findByIdAndDelete(req.params.id);
        if (!post) throw Error('No Posts Found');
        res.status(200).json({success:true});
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})


router.patch('/:id', async (req, res) => {
    try {
        const post = await Posts.findByIdAndUpdate(req.params.id,req.body);
        if (!post) throw Error('No Posts Found');
        res.status(200).json({success:true});
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})

module.exports = router;
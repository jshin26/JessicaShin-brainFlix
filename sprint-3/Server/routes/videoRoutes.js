const express = require('express');
const router = express.Router();
// const { v4: uuidv4 } = require('uuid');
const videoData = require('../data/videodata')

router.get('/video', (req, res) => {
    res.json(videoData);
})

router.get('/video/:id', (req, res) => {
    let currVideo = req.params.id
        ? videoData.find(video => video.id === req.params.id)
        : videoData;

    res.json(currVideo);
})

router.get('/video/:id/comments', (req, res) => {
    let currVideo = req.params.id
        ? videoData.find(video => video.id === req.params.id)
        : videoData;

    res.json(currVideo.comments);
})

// router.get('video/:id/comments/:commentId', (req, res) => {
    // let currVideo = req.params.id
    //     ? videoData.find(video => video.id === req.params.id)
    //     : videoData;
    
    // let currComment = req.params.id
    //     ? videoData.find(comment => comment.id === req.params.id).comments
    //     : videoData.comments;

    // res.json(currComment.comments)
// })

router.post('/video/:id/comments', (req, res) => {
    console.log('let me check: ', req.params.id)
    let currVideo = req.params.id
        ? videoData.find(video => video.id === req.params.id)
        : videoData;

    console.log(req.body);
    currVideo.comments.push(req.body);
    res.json(currVideo.comments)
})

router.post('/video', (req, res) => {
    videoData.push(req.body);
    res.json(videoData);
})

router.post('/video/:id/')

module.exports = router;
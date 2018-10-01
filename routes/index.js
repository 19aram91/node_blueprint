const express = require('express');
const router = express.Router();

let renderIndexPage = (req, res, next)=> {
    res.render('index', { title: 'Express' });
}

router.get('/', renderIndexPage);

module.exports = router;
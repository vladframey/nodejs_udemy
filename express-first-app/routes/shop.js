const express = require('express');

const router = express.Router();

router.get('/',(req, res, next) => {
    //console.log("In the last middleware");
    res.send('<h1>Hello express</h1>');
});

module.exports = router;
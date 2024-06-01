var express = require('express');
var router = express.Router();

/* GET Admin page. */

router.get('/adminpage', function(req, res, next) { 
    res.render('adminpage',{ title: 'AdminPage'});
});

module.exports = router;
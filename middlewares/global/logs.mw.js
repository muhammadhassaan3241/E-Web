const router = require('express').Router();

router.use(function (req, res) {
    var send = res.send;
    res.send = function (body) { // It might be a little tricky here, because send supports a variety of arguments, and you have to make sure you support all of them!
        // Do something with the body...
        send.call(this, body);
    };
});

module.exports = router;
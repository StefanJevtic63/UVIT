const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/student', function(req, res, next){
    const data = req.query;
    console.log("Username: ", data.username);
    console.log("Password: ", data.password);
    res.sendFile(path.join(__dirname, "..", "public", "student.html"));
})

router.post('/student', function(req, res, next){
    const data = req.body;
    console.log("Username: ", data.username);
    console.log("Password: ", data.password);
    res.render('student.ejs', {
        title: "Dobrodosli" + data.username,
        username: data.username,
        password: data.password
    });
});

module.exports = router;

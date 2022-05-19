const express = require('express');
const path = require('path');
const studentController = require('../controllers/student');

const router = express.Router();

router.get('/student', function(req, res, next){
    const data = req.query;
    console.log("Username: ", data.username);
    console.log("Password: ", data.password);
    res.sendFile(path.join(__dirname, "..", "public", "student.html"));
});

//Objekti za rutiranje treba da kazu koji kontroleri treba da obrade koje zahteve
router.post('/student', studentController.getStudentByUsername);
router.post('/student/update', studentController.updateStudentInfo);
router.post('/student/delete/:username', studentController.deleteStudentByUsername);
 
module.exports = router;

const studentModel = require('../models/student');

function getStudentByUsername(req, res, next){
    const username= req.body.username;
    const password = req.body.password;

    const student = studentModel.getStudentByUsername(username);
    if(student === null){
        res.render('error.ejs', {
            message: 'Pogresan username!'
        });
        return;
    }

    const passwordsMatch = studentModel.doPasswordsMatch(student, password);

    if(!passwordsMatch){
        res.render('error.ejs', {
            message: 'Pogresili ste lozinku, pokusajte ponovo'
        });
        return;
    }

    if(passwordsMatch){
        res.render('student.ejs', {
            title: username,
            student: student
        });
    }
    
};

function updateStudentInfo(req, res, next){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const major = req.body.major;

    const student = studentModel.getStudentByUsername(username);
    if(student === null){
        res.render('error.ejs', {
            message: 'Pogresan username!'
        });
        return;
    }

    student.password = password;
    student.name = name;
    student.major = major;

    studentModel.updateStudentInfo(student);

    res.render('student.ejs', {
        title: username,
        student: student
    });
}

function deleteStudentByUsername(req, res, next){
    const username = req.params.username;
    const password = req.body.password;

    const student = studentModel.getStudentByUsername(username);
    if(student.password !== password){
        res.render('error.ejs', { message: 'Neuspelo brisanje studenta, lozinka je pogresna.' });
        return;
    }

    studentModel.deleteStudentByUsername(username);

    res.redirect('/index.html');
}

module.exports = {
    getStudentByUsername,
    updateStudentInfo,
    deleteStudentByUsername
}

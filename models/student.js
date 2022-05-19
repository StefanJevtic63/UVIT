const students = [
    { username: 'mi20187', password: '20187', name: 'Stefan', major: 'Informatics' },
    { username: 'mr20088', password: '20088', name: 'Marija', major: 'Computer science' },
    { username: 'mm20032', password: '20032', name: 'Ivana',  major: 'Proffesor of mathematics'}
]

function getStudentByUsername(username){
    let student = null;

    for(const stud of students){
        if(stud.username === username){
            student = stud;
            break;
        }
    }
    return student;
}

function doPasswordsMatch(student, password){
    return student !== null && student.password === password;
}

function updateStudentInfo(student){
    for(const stud of students){
        if(stud.username === student.username){
            stud.name = student.name;
            stud.password = student.password;
            stud.major = student.major;
        }
    }
}

function deleteStudentByUsername(username){
    let index = -1;
    for(const i in students){
        const student = students[i];
        if(student.username === username){
            index = i;
            break;  //*******************//
        }
    }

    if(index !== -1){
        students.splice(index, 1); //brise studenta sa prosledjenim indeksom iz niza studenata
    }

    return;
}

module.exports = {
    getStudentByUsername,
    doPasswordsMatch,
    updateStudentInfo,
    deleteStudentByUsername
}

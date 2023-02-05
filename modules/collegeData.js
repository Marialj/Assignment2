var fs = require('fs');

class Data {
    constructor(students,courses){
        this.students = students;
        this.courses = courses;
    }
}

var dataCollection = null;

function initialize() {

    return new Promise ((resolve,reject) => {

        var data = fs.readFileSync("./data/students.json", 'utf8')
        var data1 = fs.readFileSync("./data/courses.json", 'utf8')

        dataCollection = new Data(JSON.parse(data),JSON.parse(data1))

        if(dataCollection){
            resolve(dataCollection)
        }
        else{
            reject('Unable to read files.')
        }
    })

}

function getAllStudents() {

    return new Promise((resolve,reject) => {

        var studentData = dataCollection.students

        if(studentData.length === 0){
            reject('Unable to read students.json')
        }
        else {
            resolve(studentData)
        }
                
    })

}

function getTAs() {

    return new Promise((resolve,reject) =>{
        var studentData = dataCollection.students
        var studentTA = studentData.filter((studentProp) => studentProp.TA === true)
        if (studentTA.length === 0){
            reject('Unable to read students.json')
        }
        else {
            resolve(studentTA)
        }

    })
}

function getCourses() {

    return new Promise((resolve,reject) =>{
        var courseData = dataCollection.courses

        if (courseData.length === 0){
            reject('Unable to read courses.json')
        }
        else {
            resolve(courseData)
        }

    })

}

module.exports = {initialize,getAllStudents,getTAs,getCourses}

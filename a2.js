
/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Maria Joy Student ID: 176251213 Date: 05 Feb 2023
*
********************************************************************************/ 

const f = require('./modules/collegeData.js')

f.initialize().then((data) => {
    f.getAllStudents().then((data) => {
        console.log("Successfully retrieved " + data.length + " students");
    }).catch((err) => {
        console.log(err);
    })

    f.getCourses().then((data) => {
        console.log("Successfully retrieved " + data.length + " courses");
    }).catch((err) => {
        console.log(err);
    })

    f.getTAs().then((data) => {
        console.log("Successfully retrieved " + data.length + " TAs");
    }).catch((err) => {
        console.log(err);
    })
}).catch((err) => {
    console.log('Unable to read files');
})
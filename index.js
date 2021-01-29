const inquirer = require("inquirer");
//const Manager = require("./lib/Manager");
//const Engineer = require("./lib/Engineer");
//const Intern = require("./lib/Intern");

const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "readme.md");

//const render = require("./lib/htmlRenderer");


lines =[];
let m="";

function thisisend(){
    console.log("termine");
    console.log(lines);
    //let t=render(lines);
    let t=m;
    fs.writeFile(outputPath,t,{encoding:'utf8'},function(error){
        if(error){
            console.log('error: 4{error}');
        }else{
            console.log('ready');
        }
    });



}





inquirer.prompt([
    {
        type: "input",
        name: "projectTitle", 
        message: "Title of the project? "
    },
    {
        type: "input",
        name: "sections", 
        message: "Sections of the project "
    },
    {
        type: "input",
        name: "contents", 
        message: "Table of Contents "
    },
    {
        type: "input",
        name: "installation", 
        message: "Installation "
    },
    {
        type: "input",
        name: "usage", 
        message: "Usage "
    },
    {
        type: "list",
        name: "license", 
        message: "license ",
        choices: ["Free","License"]
    },
    {
        type: "input",
        name: "contributing", 
        message: "Contributing "
    },
    {
        type: "input",
        name: "tests", 
        message: "Tests "
    },
    {
        type: "input",
        name: "questions", 
        message: "Questions "
    },
])
.then(managers => {

    console.log('Readme ');
    m = "Title: "+managers.projectTitle+"\n";
    m = m + "sections: "+managers.sections+"\n";
    m = m + "Contents: "+managers.contents+"\n";
    m = m + "Installation: "+managers.installation+"\n";
    m = m + "Usage: "+managers.usage+"\n";
    m = m + "License: "+managers.license+"\n";
    m = m + "Contributing: "+managers.contributing+"\n";
    m = m + "Tests: "+managers.tests+"\n";
    m = m + "Questions: "+managers.questions+"\n";
    lines.push(m);

    //if (managers.optMember=="Engineer"){
    //    new_engineer();
    //}else{
    //    if (managers.optMember=="Intern"){
    //        new_intern();
    //    }else{
            thisisend();
    //    }
    //}
})


const d3 = require("d3-fetch");
global.fetch = require("node-fetch");


function readData(fileName){
    var cantones = [];
    d3.csv("http://127.0.0.1:8887/data.csv", function(data){
        cantones.push(data);
    });
    /* TODO:
    * Save the json objs in th e.json file*/
}

function main(){
    /*read the settings file
    * fistTime decides if the data needs to be loaded 
    * and in that case, it creates the json file parsing
    * the data
    * then runs the program 
    * */ 
   readData("data");
}



main();
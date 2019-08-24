const d3 = require("d3-fetch");
global.fetch = require("node-fetch");
function readData(fileName){
    var array = d3.csv("data.csv");
    console.log("HI");
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
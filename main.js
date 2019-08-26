const d3 = require("d3-fetch");
global.fetch = require("node-fetch");


function readData(fileName){
    var cantones;
    cantones = d3.csv("http://127.0.0.1:8887/data.csv").then(function(data) {
        data.forEach(function(d) {
            d.poblacion = +d.poblacion;
            d.natalidad = +d.natalidad;
            d.mortalidad = +d.mortalidad;
            d.nupcialidad = +d.nupcialidad;
        });
      });
      console.log(cantones);

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
//import { faker } from '@faker-js/faker';
let {faker} = require('@faker-js/faker');
let {writeFile} = require('fs');

let names = ""
for(let i=0; i < 1000; i++){
    names += faker.name.fullName() + "\n";
}

writeFile("names.txt", names, function(err){
    if(err){
        console.log("Ha ocurrido un error")
    } else {
        console.log("Ha terminado satisfactoriamente")
    }
})

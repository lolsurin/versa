"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function genBigBangArray() {
    var result = [];
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('BIGBANG');
        }
        else if (i % 3 === 0) {
            result.push('BIG');
        }
        else if (i % 5 === 0) {
            result.push('BANG');
        }
        else {
            result.push(i.toString());
        }
    }
    return result;
}
var output = genBigBangArray();
//Exception Handling 
try {
    fs.writeFileSync('output.json', // write to the JSON String to output.json
    JSON.stringify(output)); // convert to JSON String
    console.log('Output saved to output.json');
}
catch (error) {
    console.error('Error writing file:', error);
}

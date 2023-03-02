"use strict";

const parse = require('./utils/parse60.js');

const campo60 =
    "GLOSA               1000";

const lengths = [
    20, 4
];

const campos = [
    "glosas", "monto"
];

const objParsed = parse(campo60, lengths, campos);

console.log(objParsed);
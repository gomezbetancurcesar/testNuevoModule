//index.js
"use strict";

const parse = require('./utils/parse60.js');

function helloNpm() {
    return "hello NPM"
}

module.exports = {
    helloNpm,
    parse
}
"use strict";

function parse(campo60 = "", lengths = [], campos = []) {
    let lengthsSum = 0;
    lengths.map(l => lengthsSum += l);

    if (lengthsSum != campo60.length) {
        console.log(`Atención!! Los largos no coinciden ===> campo60: ${campo60.length}, array lengths: ${lengthsSum}`);
    }

    console.log('Iniciando parseo...');
    let startIndex = 0;
    const objParsed = {};
    for (let [i, len] of lengths.entries()) {
        const p = campo60.substr(startIndex, len);
        objParsed[campos[i]] = p;
        startIndex += len;
    }
    console.log("Parseo finalizado...");

    return objParsed;
}

module.exports = parse;
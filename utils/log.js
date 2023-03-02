"use strict";

//se usaba chalk pero se quitó por compatibilidad

function success(msg) {
    console.log(msg);
}

function error(msg) {
    console.error(msg);
}

function warning(msg) {
    console.log(msg);
}

function info(msg) {
    console.log(msg);
}

module.exports = {
    success,
    error,
    warning,
    info
};
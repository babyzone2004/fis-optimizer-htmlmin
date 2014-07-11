/*
 * fis-optimizer-htmlmin
 * http://fis.baidu.com/
 *
 * Copyright (c) 2014 babyzone2004
 * Licensed under the MIT license.
 */

'use strict';
var chalk = require('chalk');
var minify = require('html-minifier').minify;
var mix = function(o, data) {
    for(var key in data) {
        o[key] = data[key];
    }
    return o;
}

var defaultOptions = {
    removeComments: true,
    collapseWhitespace: true,
    minifyJS: true
};

var prettyBytes = function(num) {
    var result = (num / 1024).toFixed(2);
    return  result + "kb";
}

module.exports = function(content, file, conf) {
    var min;
    var option = mix(defaultOptions, conf);
    try {
        min = minify(content, option);
    } catch (err) {
        return console.log(chalk.cyan(err));
    }
    console.log('Minified ' + chalk.cyan(file.basename) + " " + prettyBytes(Buffer.byteLength(content, 'utf8')) + " → " + prettyBytes(Buffer.byteLength(min, 'utf8')));
    return min;
};

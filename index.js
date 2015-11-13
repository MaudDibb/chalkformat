'use strict';

var chalk = require("chalk");
var ansiStyles = require("ansi-styles");

module.exports = function(formats) {
    let sections = [];
        
    formats.forEach(function(format) {
        let styles = [], 
            parsedStyle = chalk;
        
        format.styles.split('.').forEach( function(style) {
            if (ansiStyles.hasOwnProperty(style)) {
                parsedStyle = parsedStyle[style];
            } else {
                parsedStyle = function(result) { return result; };
            }
        });
            
        sections.push({
            val:format.value, 
            style:parsedStyle
        });
    });
    
    return function() {
        const args = Array.prototype.slice.call(arguments);
        let result = '';
        
        sections.forEach(function(obj) {
            if (/\$[0-9]+/.test(obj.val)) {
                var index = obj.val.replace(/\$/,'')|0;
                result += obj.style(args[index]);
            } else {
                result += obj.style(obj.val);
            }
        });
        
        return result;
    }
}

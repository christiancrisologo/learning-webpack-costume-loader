var strip_comments = require('strip-json-comments');
module.exports = function(source){
    this.cacheable(); // cache the inputs to outputs
    console.log('source ',source);
    console.log('strip_comments= ',strip_comments(source));
    return strip_comments(source); // return the strip comments
}
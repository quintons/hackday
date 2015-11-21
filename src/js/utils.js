/**
 * utils object
 */

/**
 * hackday global object
 * @type {hackday|*|{}}
 */
var hackday = hackday || {};

;(function(doc, win){

    // private members


    /**
     * list of utils
     * @type {{}}
     */
    hackday.utils = {
        foo: function(){
            console.log('utils');
        }
    };

})(document, window);
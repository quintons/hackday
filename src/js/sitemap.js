/**
 * sitemap object
 */

/**
 * hackday global object
 * @type {hackday|*|{}}
 */
var hackday = hackday || {};

;(function(doc, win, $){

    hackday.sitemap = (function(){

        // private members
        var _options = null;

        // private methods
        var _methods = {
            bindings: function(){
                // bindings go here
            }
        };

        // public methods
        var api = {
            foo: function(){
                // example public method
            },
            init: function(options){
                // initialisation logic goes here
                _methods.bindings();
                console.log('sitemap');
            }
        };

        return api;

    })();

})(document, window, jquery);

// page level initilisation
var options = {foo: 'hello'};
hackday.sitemap.init(options);
hackday.sitemap.foo();

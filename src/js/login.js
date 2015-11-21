/**
 * login object
 */

/**
 * hackday global object
 * @type {hackday|*|{}}
 */
var hackday = hackday || {};

;(function(doc, win){

    hackday.login = (function(){

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
                console.log('login');
            }
        };

        return api;

    })();

})(document, window);

// page level initilisation
var options = {foo: 'hello'};
hackday.login.init(options);
hackday.login.foo();

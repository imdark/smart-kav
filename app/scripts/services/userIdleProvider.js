'use strict'

angular.module('angularApp')
  .factory('UserIdle', function($document, $q) {
    return function userIdle (idleWait) {
    	var userIdle = $q.defer();
    	userIdle.promise.happened = function(fn){ userIdle.promise.then(null,null,fn); };

  		var userInteracted = $q.defer();
    	userInteracted.promise.happened = function(fn){ userInteracted.promise.then(null,null,fn); };

  		var idleState = false;
  		var idleTimer = initTimer(idleWait);

  		$document.find('*').bind('mousemove keydown scroll touchstart touchend touchmove', function () {
        
        	clearTimeout(idleTimer);
                
	        if (idleState == true) { 

	            // Reactivated event
	            userInteracted.notify();        
	        }
	        
	        idleState = false;
	        idleTimer = initTimer(idleWait);
    	});

    	$document.trigger("mousemove");

  		function initTimer(timeout) {
			return setTimeout(function () { 
				// idle event
        		userIdle.notify();
        		idleState = true; 
        	}, timeout);
		};
    	
    	return {
    		userIdle: userIdle.promise,
    		userInteracted: userInteracted.promise
    	}
    };
});

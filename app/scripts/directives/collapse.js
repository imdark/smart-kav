'use strict'

angular.module('angularApp')
  .directive('collapse', function() {
  	return {
	    link: function(scope, element, attrs) {
	    	scope.$watch(attrs.collapse, function(newValue) {

	    			if(newValue) {
	    				//element.show(element.empty);
    				} else {
						$(scope.myMap.getDiv()).appendTo(element);
						google.maps.event.trigger(scope.myMap, 'resize');
						//element.show(function () {
							//google.maps.event.trigger(scope.myMap, 'resize');
						//});
					};
	    		});
	    }
  	}
});

'use strict';

angular.module('angularApp')
  .controller('MainCtrl', function ($scope, UserIdle, $animate) {
    $scope.arrivals = [
      {busName: 'קו-48 סופרבוס: לכיוון ראשל (מערב)', timeTilArrival: getRandomNumber()},
      {busName: 'קו-12 דן: לכיוון תל רעננה', timeTilArrival: getRandomNumber()},
      {busName: 'קו-19 דן: לכיוון תל תל אביב', timeTilArrival: getRandomNumber()},
      {busName: 'קו-48 דן: לכיוון תל חיפה', timeTilArrival: getRandomNumber()},
      {busName: 'קו-48 סופרבוס: לכיוון ראשלץ (מערב)', timeTilArrival: getRandomNumber()},
      {busName: 'קו-147 דן: לכיוון תל אביב', timeTilArrival: getRandomNumber()},
      {busName: 'קו-222 דן: לכיוון תל ראשלץ (מערב)', timeTilArrival: getRandomNumber()},
      {busName: 'קו-12 דן: לכיוון תל רעננה', timeTilArrival: getRandomNumber()},
      {busName: 'קו-19 דן: לכיוון תל תל אביב', timeTilArrival: getRandomNumber()},
      {busName: 'קו-48 דן: לכיוון תל חיפה', timeTilArrival: getRandomNumber()},
      {busName: 'קו-48 סופרבוס: לכיוון ראשלץ (מערב)', timeTilArrival: getRandomNumber()},
      {busName: 'קו-147 דן: לכיוון תל אביב', timeTilArrival: getRandomNumber()},
      {busName: 'קו-222 דן: לכיוון תל ראשלץ (מערב)', timeTilArrival: getRandomNumber()},
      {busName: 'קו-12 דן: לכיוון תל רעננה', timeTilArrival: getRandomNumber()},
      {busName: 'קו-19 דן: לכיוון תל תל אביב', timeTilArrival: getRandomNumber()},
      {busName: 'קו-48 דן: לכיוון תל חיפה', timeTilArrival: getRandomNumber()},
      {busName: 'קו-48 סופרבוס: לכיוון ראשל (מערב)', timeTilArrival: getRandomNumber()},
      {busName: 'קו-12 דן: לכיוון תל רעננה', timeTilArrival: getRandomNumber()},
      {busName: 'קו-19 דן: לכיוון תל תל אביב', timeTilArrival: getRandomNumber()},
      {busName: 'קו-48 דן: לכיוון תל חיפה', timeTilArrival: getRandomNumber()},
      {busName: 'קו-48 סופרבוס: לכיוון ראשלץ (מערב)', timeTilArrival: getRandomNumber()},
      {busName: 'קו-147 דן: לכיוון תל אביב', timeTilArrival: getRandomNumber()},
      {busName: 'קו-222 דן: לכיוון תל ראשלץ (מערב)', timeTilArrival: getRandomNumber()},
      {busName: 'קו-12 דן: לכיוון תל רעננה', timeTilArrival: getRandomNumber()},
      {busName: 'קו-19 דן: לכיוון תל תל אביב', timeTilArrival: getRandomNumber()},
      {busName: 'קו-48 דן: לכיוון תל חיפה', timeTilArrival: getRandomNumber()},
      {busName: 'קו-48 סופרבוס: לכיוון ראשלץ (מערב)', timeTilArrival: getRandomNumber()},
      {busName: 'קו-147 דן: לכיוון תל אביב', timeTilArrival: getRandomNumber()},
      {busName: 'קו-222 דן: לכיוון תל ראשלץ (מערב)', timeTilArrival: getRandomNumber()},
      {busName: 'קו-12 דן: לכיוון תל רעננה', timeTilArrival: getRandomNumber()},
      {busName: 'קו-19 דן: לכיוון תל תל אביב', timeTilArrival: getRandomNumber()},
      {busName: 'קו-48 דן: לכיוון תל חיפה', timeTilArrival: getRandomNumber()},
      {busName: 'קו-48 סופרבוס: לכיוון ראשל (מערב)', timeTilArrival: getRandomNumber()},
      {busName: 'קו-12 דן: לכיוון תל רעננה', timeTilArrival: getRandomNumber()},
      {busName: 'קו-19 דן: לכיוון תל תל אביב', timeTilArrival: getRandomNumber()},
      {busName: 'קו-48 דן: לכיוון תל חיפה', timeTilArrival: getRandomNumber()},
      {busName: 'קו-48 סופרבוס: לכיוון ראשלץ (מערב)', timeTilArrival: getRandomNumber()},
      {busName: 'קו-147 דן: לכיוון תל אביב', timeTilArrival: getRandomNumber()},
      {busName: 'קו-222 דן: לכיוון תל ראשלץ (מערב)', timeTilArrival: getRandomNumber()},
      {busName: 'קו-12 דן: לכיוון תל רעננה', timeTilArrival: getRandomNumber()},
      {busName: 'קו-19 דן: לכיוון תל תל אביב', timeTilArrival: getRandomNumber()},
      {busName: 'קו-48 דן: לכיוון תל חיפה', timeTilArrival: getRandomNumber()},
      {busName: 'קו-48 סופרבוס: לכיוון ראשלץ (מערב)', timeTilArrival: getRandomNumber()},
      {busName: 'קו-147 דן: לכיוון תל אביב', timeTilArrival: getRandomNumber()},
      {busName: 'קו-222 דן: לכיוון תל ראשלץ (מערב)', timeTilArrival: getRandomNumber()},
      {busName: 'קו-12 דן: לכיוון תל רעננה', timeTilArrival: getRandomNumber()},
      {busName: 'קו-19 דן: לכיוון תל תל אביב', timeTilArrival: getRandomNumber()},
      {busName: 'קו-48 דן: לכיוון תל חיפה', timeTilArrival: getRandomNumber()},
    ];

    function getRandomNumber() {
      return Math.floor(Math.random() * 101) + 1;
    }
    $scope.expand = function(arrival) {
      $scope.arrivals.forEach(function(curr) { if(curr != arrival ) curr.selected = false;});
      arrival.selected = !arrival.selected;
    }

    $scope.myMap = {};
    
    function stringRepeat(originString, length) {
      var repeatedValue = '';

      for (var i = 0; i < length; i++) {
        repeatedValue += originString;
      };

      return repeatedValue;
    }; 

    $scope.padLeft = function padLeft(originalValue, padLenght, paddingChar) {
      return ( stringRepeat(paddingChar, padLenght) + originalValue ).slice(-padLenght);
    };

    $scope.mapOptions = {
      center: new google.maps.LatLng(32.166813,34.8392974),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var idleProvider = UserIdle(10000);
    idleProvider.userIdle.happened(function() {
      $scope.showAd = true;
    });

    idleProvider.userInteracted.happened(function() {
      $scope.showAd = false;
    });
    // $scope.navigationMap = {};

    $scope.navigationMapOptions = {
      center: new google.maps.LatLng(32.166813,34.8392974),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.$watch('phase', function(newValue) { 
      if (newValue === 3) {
        $animate.removeClass($('.navigate-card-panel'), 'collapsed');
        $animate.addClass($('.navigate-card-panel'), 'fully-extanded', function() {
          google.maps.event.trigger($scope.navigationMap, 'resize');
        });
      } else {
        $animate.removeClass($('.navigate-card-panel'), 'fully-extanded');
        $animate.addClass($('.navigate-card-panel'), 'collapsed');
      }
    });

    var rendererOptions = { draggable: true };
    var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);;
    var directionsService = new google.maps.DirectionsService();
    
    directionsDisplay.setMap($scope.navigationMap);
    directionsDisplay.setPanel(document.getElementById('directionsPanel'));

    $scope.navigateTo = function navigateTo(targetAdress){
      var request = {
        origin: 'הרצליה',
        destination: targetAdress,
        travelMode: google.maps.TravelMode.TRANSIT
      };
  
      directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        }
      });
    };

  });

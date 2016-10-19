'use strict';

eventsApp.controller('EventController',
function EventController($scope, eventData) {
$scope.sortorder='name';
console.log('hello')
console.log('eventData')

$scope.event=eventData.event;

  eventData.getEvent=(function(event){
    $scope.event=event;
  });

  $scope.upVoteSession=function(session)
  {
    session.upVoteCount++;
  };
  $scope.downVoteSession=function(session)
  {
    session.upVoteCount--;
  };

}

);

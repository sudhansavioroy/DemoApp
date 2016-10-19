'use strict';

var eventsApp = angular.module('eventsApp', ['ngRoute'])
.config(function($routeProvider)
{
$routeProvider.when('/newEvent',
{
  templateUrl:'templates/NewEvent.html',
  controller:'EditEventController'
})
});

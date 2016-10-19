'use strict';

eventsApp.controller('EditProfileController',
function EditProfileController($scope, gravataUrlBuilder) {
  $scope.user={};

        $scope.getGravatarUrl = function(email) {
return gravataUrlBuilder.buildGravatarUrl(email);

                    }

    }
);

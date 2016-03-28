(function() {

  'use strict';

  angular.module('Gitduck')
    .controller('MainController', MainControllerHandler);

  MainControllerHandler.$inject = [
    '$scope', '$rootScope', '$http', 'setup', 'configuration'];

  function MainControllerHandler($scope, $rootScope, $http, setup, configuration) {

    init();

    function init() {
      setup.initiate(configuration.defaults);

      $scope.issuesByMilestone = setup.populate();
    };

    $scope.showModal = function (issue) {
      console.log(issue);
      $rootScope.$broadcast('showModal', issue);
    };

  }

})()

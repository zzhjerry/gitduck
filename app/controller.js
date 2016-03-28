(function() {

  'use strict';

  angular.module('Gitduck')
    .controller('MainController', MainControllerHandler);

  MainControllerHandler.$inject = ['$scope', '$rootScope', '$http', 'setup'];

  function MainControllerHandler($scope, $rootScope, $http, setup) {

    init();

    function init() {
      setup.initiate({
        milestoneWhiteList: [
          'To-Do',
          'Doing',
          'In Review'
        ],
        requestEndpoint: {
          repoName: 'zzhjerry/gitduck',
          topic: 'issues',
          params: {
            state: 'open',
            label: 'project-lorem'
          }
        }
      });

      $scope.issuesByMilestone = setup.populate();
    };

    $scope.showModal = function (issue) {
      console.log(issue);
      $rootScope.$broadcast('showModal', issue);
    }
  }

})()

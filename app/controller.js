(function() {

  'use strict';

  angular.module('Gitduck')
    .controller('MainController', MainControllerHandler);

  MainControllerHandler.$inject = ['$scope', '$rootScope', '$http', 'setup'];

  function MainControllerHandler($scope, $rootScope, $http, setup) {
    $scope.projectTitle = setup.projectTitle('Project Lorem');
    $scope.status = setup.status({
      'No MileStone': [],
      'To Do': [],
      'Doing': [],
      'In Review': []
    });
    var endpoint = setup.url({
      repoName: 'zzhjerry/gitduck',
      topic: 'issues',
      params: {
        state: 'open',
        label: 'project-lorem'
      }
    });

    console.log(endpoint);

    $http.get(endpoint)
      .success(function (response) {
        response.forEach(function(issue) {
          console.log(issue.milestone && issue.milestone.title);
          if (issue.milestone) {
            switch(issue.milestone.title) {
              case 'To-Do':
                $scope.status['To Do'].push(issue);
                break;
              case 'Doing':
                $scope.status['Doing'].push(issue);
                break;
              case 'In Review':
                $scope.status['In Review'].push(issue);
                break;
            }
          }
          else {
            $scope.status['No MileStone'].push(issue);
          }
        })
      })
      .error(function (response) {
        consolg.log(response);
      });

    $scope.showModal = function (issue) {
      console.log(issue);
      $rootScope.$broadcast('showModal', issue);
    }

  };

})()

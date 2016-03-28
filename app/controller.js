(function() {

  'use strict';

  angular.module('Gitduck')
    .controller('MainController', MainControllerHandler);

  MainControllerHandler.$inject = ['$scope', '$rootScope', '$http', 'setup'];

  function MainControllerHandler($scope, $rootScope, $http, setup) {
    $scope.projectTitle = setup.projectTitle('Project Lorem');
    $scope.issuesWithMilestone = setup.milestones([
      'No MileStone',
      'To Do',
      'Doing',
      'In Review'
    ]);
    var url = setup.url({
      repoName: 'zzhjerry/gitduck',
      topic: 'issues',
      params: {
        state: 'open',
        label: 'project-lorem'
      }
    });

    console.log(url);

    $http.get(url)
      .success(function (response) {
        response.forEach(function(issue) {
          console.log(issue.milestone && issue.milestone.title);
          if (issue.milestone) {
            switch(issue.milestone.title) {
              case 'To-Do':
                $scope.issuesWithMilestone['To Do'].push(issue);
                break;
              case 'Doing':
                $scope.issuesWithMilestone['Doing'].push(issue);
                break;
              case 'In Review':
                $scope.issuesWithMilestone['In Review'].push(issue);
                break;
            }
          }
          else {
            $scope.issuesWithMilestone['No MileStone'].push(issue);
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

(function() {

  'use strict';

  angular.module('Gitduck')
    .controller('MainController', MainControllerHandler);

  MainControllerHandler.$inject = ['$scope', '$rootScope', '$http', 'setup'];

  function MainControllerHandler($scope, $rootScope, $http, setup) {
    $scope.projectTitle = setup.projectTitle('Project Lorem');
    var milestoneWhiteList = [
      'No MileStone',
      'To-Do',
      'Doing',
      'In Review'
    ];
    $scope.issuesWithMilestone = setup.milestones(milestoneWhiteList);
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
            var milestoneTitle = issue.milestone.title;
            if (milestoneWhiteList.indexOf(milestoneTitle) != -1) {
              $scope.issuesWithMilestone[milestoneTitle].push(issue);
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

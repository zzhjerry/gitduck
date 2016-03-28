(function() {

  "use strict";

  angular.module('Gitduck')
    .controller("MainController", ControllerFunc);

  ControllerFunc.$inject = ["$scope", "$rootScope", "$http"];

  function ControllerFunc($scope, $rootScope, $http) {
    $scope.projectTitle = "Project Lorem";
    $scope.status = {
      "No MileStone": [],
      "To Do": [],
      "Doing": [],
      "In Review": []
    };

    $http.get("https://api.github.com/repos/zzhjerry/gitduck/issues?state=open&label=project-lorem")
      .success(function (response) {
        response.forEach(function(issue) {
          console.log(issue.milestone && issue.milestone.title);
          if (issue.milestone) {
            switch(issue.milestone.title) {
              case "To-Do":
                $scope.status["To Do"].push(issue);
                break;
              case "Doing":
                $scope.status["Doing"].push(issue);
                break;
              case "In Review":
                $scope.status["In Review"].push(issue);
                break;
            }
          }
          else {
            $scope.status["No MileStone"].push(issue);
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

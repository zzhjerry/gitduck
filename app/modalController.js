(function() {

  "use strict";

  angular.module("Gitduct")
    .controller("ModalController", ModalControllerHandler);

  ModalControllerHandler.$inject = ["$scope"];

  function ModalControllerHandler($scope) {

     $scope.$on('showModal', function(event, issue) {
        console.log(issue);
        $scope.issue = issue;
        document.getElementById('modal').style.display = 'block';
     });

     $scope.closeModal = function() {
        document.getElementById('modal').style.display = 'none';
     }
  }

})()

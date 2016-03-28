(function() {

  angular.module('Gitduck')
    .controller('navbarController', NavbarControllerHandler);

  NavbarControllerHandler.$inject = ['$scope', 'setup'];

  function NavbarControllerHandler($scope, setup) {
    $scope.projectTitles = ['Project Lorem', 'Project Sahala'];
    $scope.setMaster = function(title) {
      $scope.title = title;
      setup.milestoneWhiteList = ['To-Do', 'Doing'];
    };
    $scope.toggleClass = function(title) {
      selected = $scope.title === title;
      return {
        'w3-blue': selected,
        'w3-white': !selected
      }
    }

  }

})()

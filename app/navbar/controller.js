(function() {

  angular.module('Gitduck')
    .controller('navbarController', NavbarControllerHandler);

  NavbarControllerHandler.$inject = ['$scope'];

  function NavbarControllerHandler($scope) {
    $scope.projectTitles = ['Project Lorem', 'Project Sahala'];
    $scope.setMaster = function(title) {
      $scope.title = title;
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

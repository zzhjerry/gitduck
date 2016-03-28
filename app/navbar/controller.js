(function() {

  angular.module('Gitduck')
    .controller('navbarController', NavbarControllerHandler);

  NavbarControllerHandler.$inject = ['$rootScope', '$scope', 'setup'];

  function NavbarControllerHandler($rootScope, $scope, setup) {
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

(function() {

  angular.module('Gitduck')
    .controller('navbarController', NavbarControllerHandler);

  NavbarControllerHandler.$inject = [
    '$rootScope', '$scope', 'setup', 'configuration'];

  function NavbarControllerHandler($rootScope, $scope, setup, configuration) {
    $scope.projectTitles = [];
    for (var key in configuration) {
      $scope.projectTitles.push(configuration[key].title);
    }

  }

})()

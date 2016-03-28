(function() {

  angular.module('Gitduck')
    .factory('setup', ['$httpParamSerializer', setupFactory]);

    function setupFactory($httpParamSerializer) {

      var API = {
        projectTitle: projectTitle,
        status: status,
        url: url
      };

      function projectTitle(title) {
        return title
      };

      function status(status) {
        return status
      };

      function url(options) {
        var root = 'https://api.github.com/repos/';
        var repoName = options.repoName;
        var topic = options.topic;
        var params = $httpParamSerializer(options.params);
        return root + repoName + '/' + topic + '?' + params
      }

      return API
    }

})()

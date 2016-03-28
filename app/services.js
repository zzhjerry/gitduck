(function() {

  angular.module('Gitduck')
    .factory('setup', setupFactory);

    function setupFactory() {

      return {
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
        var repoName = options.repoName;
        var topic = options.topic;
        var root = 'https://api.github.com/repos/';
        return root + repoName + '/' + topic
      }
    }

})()

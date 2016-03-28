(function() {

  angular.module('Gitduck')
    .factory('setup', ['$httpParamSerializer', setupFactory]);

    function setupFactory($httpParamSerializer) {

      var API = {
        projectTitle: projectTitle,
        milestones: milestones,
        url: url
      };

      function projectTitle(title) {
        return title
      };

      function milestones(options) {
        obj = {};
        options.forEach(function(milestone) {
          obj[milestone] = [];
        });
        return obj
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

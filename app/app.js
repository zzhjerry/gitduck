(function() {

  angular.module("Gitduck", [])
    .factory('configuration', getConfig)

    function getConfig() {

      var projects = {

        defaults: {
          title: "Project Lorem",
          requestEndpoint: {
            repoName: 'zzhjerry/gitduck',
            topic: 'issues',
            params: {
              state: 'open',
              label: 'project-lorem'
            }
          },
          milestoneWhiteList: [
            'To-Do',
            'Doing',
            'In Review'
          ]
        },
      };

      return projects
    }

})()

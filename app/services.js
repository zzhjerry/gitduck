(function() {

  angular.module('Gitduck')
    .service('setup', ['$httpParamSerializer', '$http', setupFactory]);

    function setupFactory($httpParamSerializer, $http) {
      var self = this;

      this.initiate = function(options) {
        this.milestoneWhiteList = options.milestoneWhiteList;
        this.requestEndpoint = this.getRequestEndpoint(options.requestEndpoint);
        this.issuesByMilestone = this.initiateIssuesByMilestone();
      }

      this.getRequestEndpoint = function(options) {
        var root = 'https://api.github.com/repos/';
        var repoName = options.repoName;
        var topic = options.topic;
        var params = $httpParamSerializer(options.params);
        return root + repoName + '/' + topic + '?' + params
      }

      this.initiateIssuesByMilestone = function() {
          obj = {'No MileStone': []};
          this.milestoneWhiteList.forEach(function(milestone) {
            obj[milestone] = [];
          });
          return obj
      };

      this.populate = function() {
        console.log(this.requestEndpoint);
        $http.get(this.requestEndpoint)
          .success(function(response) {
            response.forEach(function(issue) {
              console.log(issue.milestone && issue.milestone.title);
              if (issue.milestone) {
                var milestoneTitle = issue.milestone.title;
                if (self.milestoneWhiteList.indexOf(milestoneTitle) != -1) {
                  self.issuesByMilestone[milestoneTitle].push(issue);
                }
              }
              else {
                console.log(obj);
                self.issuesByMilestone['No MileStone'].push(issue);
              }
            })
          })
          .error(function (response) {
            consolg.log(response);
          });
        return this.issuesByMilestone
      }

    }

})()

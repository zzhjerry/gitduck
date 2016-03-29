# gitduck
Give me github labels, give you back issues segmented by milestone in kanban view

## setup

    git clone git@github.com:zzhjerry/gitduck.git
    open index.html
  
## configure

1. open `app/app.js`
2. find the `projects` object
3. you will see it defaulted to be this one

```
defaults: {
  title: "Project Lorem", // your project title
  requestEndpoint: {
    repoName: 'zzhjerry/gitduck', // your repo with :owner/:reponame format
    topic: 'issues', // don’t touch this yet
    params: {
      state: 'open',
      label: 'project-lorem' // project label
    }
  },
  // milestones you want to show
  milestoneWhiteList: [
    'To-Do',
    'Doing',
    'In Review'
  ]
}
```

Then overwrite the default values to fit in your specific project name, repo, project-label, and milestones you want to show.

The label name and milestones in the `milestoneWhiteList` needs to be exactly the same one showing in your github repo

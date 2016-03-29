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
}
```

Then overwrite the default values to fit in your specific project name, repo, project-label, and milestones you want to show.

function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}

function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText);
  const repoList = '<ul>' + repos.map(rep => {
    return (`
      <li>
        <h2><a href="${rep.html_url}">${rep.name}</a></h2>
        <p>Watchers: ${rep.watchers_count}</p>
        <p>Forks: ${rep.forks_count}</p>
        <p>Issues: ${rep.open_issues_count}</p>
      </il>`
    )
  }).join('') + '</ul>'
  document.getElementById('repositories').innerHTML = repoList;
}

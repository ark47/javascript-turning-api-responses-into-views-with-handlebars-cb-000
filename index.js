function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/ark47/repos')
  req.send()
}

function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText);
  const repoList = `<ul>${repos.map(rep => '<li>' + rep.name + '</li>').join('')}</il>`;
  document.getElementById('repositories').innerHTML = repoList;
}

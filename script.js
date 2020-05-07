function chunkArray(array, size) {
  if (array.length <= size) {
    return [array];
  }
  return [array.slice(0, size), ...chunkArray(array.slice(size), size)];
}

const dateTimeFormat = Intl.DateTimeFormat("fr");

function generateUI(json){
  const repos = json.map(j => ({
    name: j.name,
    description: j.description || "",
    updated_at: j.updated_at
  }));

  const chunks = chunkArray(repos, 3);

  let html = "";

  chunks.forEach(chunk => {
    html += '<div class="columns">';

    chunk.forEach(repo => {
      html += `
            <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">${repo.name}</p>
                    <p class="subtitle is-6">@johnsmith</p>
                  </div>
                </div>
  
                <div class="content">
                   ${repo.description}
                  <br />
                  Dernière mise à jour: <time datetime="${
                    repo.updated_at
                  }">${dateTimeFormat.format(new Date(repo.updated_at))}</time>
                </div>
              </div>
            </div>
          </div>`;
    });
    html += "</div>";
  });

  document.querySelector(".container").innerHTML = html;
}
const json = [
  {
    id: 66104863,
    node_id: "MDEwOlJlcG9zaXRvcnk2NjEwNDg2Mw==",
    name: "10K-Project",
    full_name: "EmmanuelDemey/10K-Project",
    private: false,
    owner: {
      login: "EmmanuelDemey",
      id: 555768,
      node_id: "MDQ6VXNlcjU1NTc2OA==",
      avatar_url: "https://avatars2.githubusercontent.com/u/555768?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/EmmanuelDemey",
      html_url: "https://github.com/EmmanuelDemey",
      followers_url: "https://api.github.com/users/EmmanuelDemey/followers",
      following_url:
        "https://api.github.com/users/EmmanuelDemey/following{/other_user}",
      gists_url: "https://api.github.com/users/EmmanuelDemey/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/EmmanuelDemey/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/EmmanuelDemey/subscriptions",
      organizations_url: "https://api.github.com/users/EmmanuelDemey/orgs",
      repos_url: "https://api.github.com/users/EmmanuelDemey/repos",
      events_url: "https://api.github.com/users/EmmanuelDemey/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/EmmanuelDemey/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/EmmanuelDemey/10K-Project",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/EmmanuelDemey/10K-Project",
    forks_url: "https://api.github.com/repos/EmmanuelDemey/10K-Project/forks",
    keys_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/EmmanuelDemey/10K-Project/teams",
    hooks_url: "https://api.github.com/repos/EmmanuelDemey/10K-Project/hooks",
    issue_events_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/issues/events{/number}",
    events_url: "https://api.github.com/repos/EmmanuelDemey/10K-Project/events",
    assignees_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/branches{/branch}",
    tags_url: "https://api.github.com/repos/EmmanuelDemey/10K-Project/tags",
    blobs_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/languages",
    stargazers_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/stargazers",
    contributors_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/contributors",
    subscribers_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/subscribers",
    subscription_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/subscription",
    commits_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/EmmanuelDemey/10K-Project/merges",
    archive_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/downloads",
    issues_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/labels{/name}",
    releases_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/EmmanuelDemey/10K-Project/deployments",
    created_at: "2016-08-19T18:46:12Z",
    updated_at: "2016-10-09T12:08:54Z",
    pushed_at: "2016-09-03T14:31:40Z",
    git_url: "git://github.com/EmmanuelDemey/10K-Project.git",
    ssh_url: "git@github.com:EmmanuelDemey/10K-Project.git",
    clone_url: "https://github.com/EmmanuelDemey/10K-Project.git",
    svn_url: "https://github.com/EmmanuelDemey/10K-Project",
    homepage: null,
    size: 31,
    stargazers_count: 3,
    watchers_count: 3,
    language: "PHP",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 1,
    open_issues: 0,
    watchers: 3,
    default_branch: "master"
  },
  {
    id: 20683090,
    node_id: "MDEwOlJlcG9zaXRvcnkyMDY4MzA5MA==",
    name: "ace-builds",
    full_name: "EmmanuelDemey/ace-builds",
    private: false,
    owner: {
      login: "EmmanuelDemey",
      id: 555768,
      node_id: "MDQ6VXNlcjU1NTc2OA==",
      avatar_url: "https://avatars2.githubusercontent.com/u/555768?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/EmmanuelDemey",
      html_url: "https://github.com/EmmanuelDemey",
      followers_url: "https://api.github.com/users/EmmanuelDemey/followers",
      following_url:
        "https://api.github.com/users/EmmanuelDemey/following{/other_user}",
      gists_url: "https://api.github.com/users/EmmanuelDemey/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/EmmanuelDemey/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/EmmanuelDemey/subscriptions",
      organizations_url: "https://api.github.com/users/EmmanuelDemey/orgs",
      repos_url: "https://api.github.com/users/EmmanuelDemey/repos",
      events_url: "https://api.github.com/users/EmmanuelDemey/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/EmmanuelDemey/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/EmmanuelDemey/ace-builds",
    description: null,
    fork: true,
    url: "https://api.github.com/repos/EmmanuelDemey/ace-builds",
    forks_url: "https://api.github.com/repos/EmmanuelDemey/ace-builds/forks",
    keys_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/EmmanuelDemey/ace-builds/teams",
    hooks_url: "https://api.github.com/repos/EmmanuelDemey/ace-builds/hooks",
    issue_events_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/issues/events{/number}",
    events_url: "https://api.github.com/repos/EmmanuelDemey/ace-builds/events",
    assignees_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/branches{/branch}",
    tags_url: "https://api.github.com/repos/EmmanuelDemey/ace-builds/tags",
    blobs_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/languages",
    stargazers_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/stargazers",
    contributors_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/contributors",
    subscribers_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/subscribers",
    subscription_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/subscription",
    commits_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/EmmanuelDemey/ace-builds/merges",
    archive_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/downloads",
    issues_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/labels{/name}",
    releases_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/EmmanuelDemey/ace-builds/deployments",
    created_at: "2014-06-10T11:41:39Z",
    updated_at: "2014-06-10T11:43:11Z",
    pushed_at: "2019-01-20T17:33:50Z",
    git_url: "git://github.com/EmmanuelDemey/ace-builds.git",
    ssh_url: "git@github.com:EmmanuelDemey/ace-builds.git",
    clone_url: "https://github.com/EmmanuelDemey/ace-builds.git",
    svn_url: "https://github.com/EmmanuelDemey/ace-builds",
    homepage: null,
    size: 12903,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "other",
      name: "Other",
      spdx_id: "NOASSERTION",
      url: null,
      node_id: "MDc6TGljZW5zZTA="
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 158594263,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTg1OTQyNjM=",
    name: "angular",
    full_name: "EmmanuelDemey/angular",
    private: false,
    owner: {
      login: "EmmanuelDemey",
      id: 555768,
      node_id: "MDQ6VXNlcjU1NTc2OA==",
      avatar_url: "https://avatars2.githubusercontent.com/u/555768?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/EmmanuelDemey",
      html_url: "https://github.com/EmmanuelDemey",
      followers_url: "https://api.github.com/users/EmmanuelDemey/followers",
      following_url:
        "https://api.github.com/users/EmmanuelDemey/following{/other_user}",
      gists_url: "https://api.github.com/users/EmmanuelDemey/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/EmmanuelDemey/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/EmmanuelDemey/subscriptions",
      organizations_url: "https://api.github.com/users/EmmanuelDemey/orgs",
      repos_url: "https://api.github.com/users/EmmanuelDemey/repos",
      events_url: "https://api.github.com/users/EmmanuelDemey/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/EmmanuelDemey/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/EmmanuelDemey/angular",
    description: "One framework. Mobile & desktop.",
    fork: true,
    url: "https://api.github.com/repos/EmmanuelDemey/angular",
    forks_url: "https://api.github.com/repos/EmmanuelDemey/angular/forks",
    keys_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/EmmanuelDemey/angular/teams",
    hooks_url: "https://api.github.com/repos/EmmanuelDemey/angular/hooks",
    issue_events_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/issues/events{/number}",
    events_url: "https://api.github.com/repos/EmmanuelDemey/angular/events",
    assignees_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/branches{/branch}",
    tags_url: "https://api.github.com/repos/EmmanuelDemey/angular/tags",
    blobs_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/languages",
    stargazers_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/stargazers",
    contributors_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/contributors",
    subscribers_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/subscribers",
    subscription_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/subscription",
    commits_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/EmmanuelDemey/angular/merges",
    archive_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/downloads",
    issues_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/labels{/name}",
    releases_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/EmmanuelDemey/angular/deployments",
    created_at: "2018-11-21T19:04:00Z",
    updated_at: "2018-12-11T14:07:57Z",
    pushed_at: "2019-08-28T10:29:42Z",
    git_url: "git://github.com/EmmanuelDemey/angular.git",
    ssh_url: "git@github.com:EmmanuelDemey/angular.git",
    clone_url: "https://github.com/EmmanuelDemey/angular.git",
    svn_url: "https://github.com/EmmanuelDemey/angular",
    homepage: "https://angular.io",
    size: 96626,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 27136265,
    node_id: "MDEwOlJlcG9zaXRvcnkyNzEzNjI2NQ==",
    name: "angular-asciidoc-directive",
    full_name: "EmmanuelDemey/angular-asciidoc-directive",
    private: false,
    owner: {
      login: "EmmanuelDemey",
      id: 555768,
      node_id: "MDQ6VXNlcjU1NTc2OA==",
      avatar_url: "https://avatars2.githubusercontent.com/u/555768?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/EmmanuelDemey",
      html_url: "https://github.com/EmmanuelDemey",
      followers_url: "https://api.github.com/users/EmmanuelDemey/followers",
      following_url:
        "https://api.github.com/users/EmmanuelDemey/following{/other_user}",
      gists_url: "https://api.github.com/users/EmmanuelDemey/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/EmmanuelDemey/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/EmmanuelDemey/subscriptions",
      organizations_url: "https://api.github.com/users/EmmanuelDemey/orgs",
      repos_url: "https://api.github.com/users/EmmanuelDemey/repos",
      events_url: "https://api.github.com/users/EmmanuelDemey/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/EmmanuelDemey/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/EmmanuelDemey/angular-asciidoc-directive",
    description: "AngularJS directive for AsciiDoctor",
    fork: true,
    url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive",
    forks_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/forks",
    keys_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/teams",
    hooks_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/hooks",
    issue_events_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/events",
    assignees_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/tags",
    blobs_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/languages",
    stargazers_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/stargazers",
    contributors_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/contributors",
    subscribers_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/subscribers",
    subscription_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/subscription",
    commits_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/merges",
    archive_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/downloads",
    issues_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/labels{/name}",
    releases_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-asciidoc-directive/deployments",
    created_at: "2014-11-25T16:57:27Z",
    updated_at: "2014-11-25T16:57:27Z",
    pushed_at: "2014-10-29T23:06:48Z",
    git_url: "git://github.com/EmmanuelDemey/angular-asciidoc-directive.git",
    ssh_url: "git@github.com:EmmanuelDemey/angular-asciidoc-directive.git",
    clone_url:
      "https://github.com/EmmanuelDemey/angular-asciidoc-directive.git",
    svn_url: "https://github.com/EmmanuelDemey/angular-asciidoc-directive",
    homepage: "",
    size: 1021,
    stargazers_count: 0,
    watchers_count: 0,
    language: "CSS",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 152065269,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTIwNjUyNjk=",
    name: "angular-cli",
    full_name: "EmmanuelDemey/angular-cli",
    private: false,
    owner: {
      login: "EmmanuelDemey",
      id: 555768,
      node_id: "MDQ6VXNlcjU1NTc2OA==",
      avatar_url: "https://avatars2.githubusercontent.com/u/555768?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/EmmanuelDemey",
      html_url: "https://github.com/EmmanuelDemey",
      followers_url: "https://api.github.com/users/EmmanuelDemey/followers",
      following_url:
        "https://api.github.com/users/EmmanuelDemey/following{/other_user}",
      gists_url: "https://api.github.com/users/EmmanuelDemey/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/EmmanuelDemey/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/EmmanuelDemey/subscriptions",
      organizations_url: "https://api.github.com/users/EmmanuelDemey/orgs",
      repos_url: "https://api.github.com/users/EmmanuelDemey/repos",
      events_url: "https://api.github.com/users/EmmanuelDemey/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/EmmanuelDemey/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/EmmanuelDemey/angular-cli",
    description: "CLI tool for Angular",
    fork: true,
    url: "https://api.github.com/repos/EmmanuelDemey/angular-cli",
    forks_url: "https://api.github.com/repos/EmmanuelDemey/angular-cli/forks",
    keys_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/EmmanuelDemey/angular-cli/teams",
    hooks_url: "https://api.github.com/repos/EmmanuelDemey/angular-cli/hooks",
    issue_events_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/issues/events{/number}",
    events_url: "https://api.github.com/repos/EmmanuelDemey/angular-cli/events",
    assignees_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/branches{/branch}",
    tags_url: "https://api.github.com/repos/EmmanuelDemey/angular-cli/tags",
    blobs_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/languages",
    stargazers_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/stargazers",
    contributors_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/contributors",
    subscribers_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/subscribers",
    subscription_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/subscription",
    commits_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/EmmanuelDemey/angular-cli/merges",
    archive_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/downloads",
    issues_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/labels{/name}",
    releases_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/EmmanuelDemey/angular-cli/deployments",
    created_at: "2018-10-08T10:58:58Z",
    updated_at: "2018-10-25T14:58:47Z",
    pushed_at: "2018-10-25T14:58:44Z",
    git_url: "git://github.com/EmmanuelDemey/angular-cli.git",
    ssh_url: "git@github.com:EmmanuelDemey/angular-cli.git",
    clone_url: "https://github.com/EmmanuelDemey/angular-cli.git",
    svn_url: "https://github.com/EmmanuelDemey/angular-cli",
    homepage: "https://cli.angular.io/",
    size: 16071,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  }
];

document.addEventListener("DOMContentLoaded", function() {
  fetch("https://api.github.com/users/EmmanuelDemey/repos")
	.then(response => response.json())
    .then(json => generateUI(json));

});

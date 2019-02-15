workflow "build, lint, test, deploy" {
  on = "push"
  resolves = [
    "lint",
    "test",
    "Checks for master branch",
    "deploy to github pages",
  ]
}

action "build (install dependencies)" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["build (install dependencies)"]
  args = "test"
  env = {
    CI = "true"
  }
}

action "lint" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["build (install dependencies)"]
  args = "run lint"
}

action "Checks for master branch" {
  uses = "actions/bin/filter@46ffca7632504e61db2d4cb16be1e80f333cb859"
  needs = ["test", "lint"]
  args = "branch master"
}

action "git config" {
  uses = "srt32/git-actions@v0.0.3"
  needs = ["Checks for master branch"]
  secrets = ["GH_USERNAME", "GH_NOREPLY"]
  args = "git config user.email $GH_NOREPLY && git config user.name $GH_USERNAME"
}

action "deploy to github pages" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run deploy"
  secrets = [
    "GITHUB_TOKEN",
    "REACT_APP_CACHED_EXCHANGE_RATES_URL",
  ]
  needs = ["git config"]
}

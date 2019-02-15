workflow "build, lint, test, deploy" {
  on = "push"
  resolves = ["lint", "test", "deploy to github pages"]
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

action "deploy to github pages" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Checks for master branch"]
  args = "run deploy"
  secrets = ["GITHUB_TOKEN"]
}

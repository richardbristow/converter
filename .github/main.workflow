workflow "PROD - install, lint, test, deploy" {
  on = "push"
  resolves = [
    "lint",
    "test",
    "check for frontend changes",
  ]
}

action "install dependencies" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "test"
  env = {
    CI = "true"
  }
  needs = ["install dependencies"]
}

action "lint" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run lint"
  needs = ["install dependencies"]
}

action "Checks for master branch" {
  uses = "actions/bin/filter@46ffca7632504e61db2d4cb16be1e80f333cb859"
  needs = ["test", "lint"]
  args = "branch master"
}

action "check for frontend changes" {
  uses = "netlify/actions/diff-includes@master"
  needs = ["Checks for master branch"]
  args = "src"
}

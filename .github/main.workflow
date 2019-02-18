workflow "install, lint, test, build, deploy" {
  on = "push"
  resolves = [
    "lint",
    "test",
    "deploy serverless backend",
    "deploy to netlify",
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

action "checks for master branch" {
  uses = "actions/bin/filter@46ffca7632504e61db2d4cb16be1e80f333cb859"
  needs = ["test", "lint"]
  args = "branch master"
}

action "build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run build"
  needs = ["checks for master branch"]
}

action "deploy to netlify" {
  uses = "netlify/actions/cli@master"
  needs = ["build"]
  args = "deploy --dir=build --prod"
  secrets = ["NETLIFY_AUTH_TOKEN", "NETLIFY_SITE_ID"]
}

action "deploy serverless backend" {
  uses = "aaronpanch/action-serverless@v1.0.0"
  secrets = ["FIXER_API_KEY", "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
  env = {
    SERVICE_ROOT = "backend"
  }
  args = "deploy --stage prod -v"
  needs = ["checks for master branch"]
}

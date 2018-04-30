# stroom-js

This module contains JavaScript components used by other Stroom modules.

We expect this module to grow until it needs refactoring.

## Releasing
Builds need to happen on the dist branch - this branch has the `.gitignore` and the bundle files, i.e. the built code. You'll need to `merge` or `rebase` from `master` first, to make sure the build files are up-to-date. Never merge from `dist` to `master` or any other branch. The `dist` branch can be used as a dependency in package.json - this means we don't need to publish to NPM. This is fine for now because the bundles are very small but at some point this will probably be too hefty and we'll want releases and SNAPSHOTs published to NPM.

To actually do a build:

1. Checkout `dist` and `merge` from `master`.
2. Use Rollup to build: `rollup -c`.
3. Add, commit, and push the altered bundle files.


## Developing
If you have an app that depends on this library but you need to make enhancements then you need to change your `package.json` dependency to point to a clone of this repo.

```
# Do this where ever you keep your dev files
git clone git@github.com:gchq/stroom-js.git
cd stroom-js

# You might need to install yarn. Or your could use NPM
yarn install

# You might need to install rollup
yarn global add rollup

# Build everything
rollup -c

# 'cd' over to your app, e.g.
cd ../stroom-ui

# Delete the existing dependency
rm -rf node_modules/stroom-js

# Add the local clone. This will overwrite the reference to the GitHub repo. 
# Remember to change this back at some point!
yarn add file://path/to/stroom-js
```
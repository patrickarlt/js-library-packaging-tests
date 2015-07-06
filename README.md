# Setup links

Because the dependancy isn't published on NPM you need to sym link it into all the folders.

1. in `dependancy` run `jspm link && npm link`
2. in `jspm` run `jspm install --link npm:packaging-and-distribution@1.0.0`
3. in `browserify run `npm link packaging-and-distribution`
4. in `webpack` run `npm link packaging-and-distribution`

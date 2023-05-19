# mosa-upenn-SoC-2023

## Running the app ##
- pull the repostiory
- run `npm install`
- run `npm run start`


## Git best pratices ##
- never push to main
- make descriptive branch names
- add initials to end of commit message ex: `git commit -m "this is my message [cf]`

## Git work flow ##
- pull new updates `git pull`
- checkout new branch `git checkout -b my-new-feature`
- complete and test branch
- commit and push updates to `my-new-feature` branch
- checkout and pull main `git checkout main` and `git pull`
- checkout previous branch `git checkout my-new-feature` - no '-b' this time
- merge `main` into `my-new-feature` branch `git merge main` ( can always abort with `git merge --abort`)
- commit and push merge to `my-new-feature` branch
- on github create a pull request merging `my-new-feature` into `main`

## Intellij Plugins ##
- indent rainbow
- rainbow brackets

## VSCODE Addons ##
- prettier typescript errors
- prettier code formatter
- colorize
- indent rainbow
- rainbow brackets

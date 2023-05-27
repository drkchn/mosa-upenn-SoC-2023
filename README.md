# mosa-upenn-SoC-2023

## Running the app ##
- pull the repository
- run `npm install`
- run `npm run start`


# Git # 

## Git best practices ## ##
- never push to main
- make descriptive branch names with the number of the issue you are working on 
  - ex: if we want to add a login page 
  1. create an issue describing what you want to do, git will assign it a number, ex: #10 Add Login Page
  2. Start from master (`git pull master`) 
  3. Checkout a branch in the following format `git checkout -b #10-add-login-page`
- When committing add issue number (must include # sign) to begging of the commit add initials to end of commit message ex: `git commit -m "[#10]this is my message [cf]`
  - Putting the issue number in the commit will allow git to automatically link it to the issue 


## Git work flow ##
- pull new updates `git pull`
- add an issue for the feature your working on in github issues
  - be sure to assign a participant and tag
- checkout new branch `git checkout -b #100-my-new-feature`
- complete and test branch
- commit and push updates to `#100-my-new-feature` branch
- checkout and pull main `git checkout main` and `git pull`
- checkout previous branch `git checkout #100-my-new-feature` - no '-b' this time
- merge `main` into `#100-my-new-feature` branch `git merge main` ( can always abort with `git merge --abort`)
- commit and push merge to `#100-my-new-feature` branch
- on github create a pull request merging `#100-my-new-feature` into `main`
- request a code review from another member of the team
- [More about trunk based development](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development)

## Working Issues ##
- When you pickup and issue there make sure to assign it to yourself (or a group)
- add the Doing tag
- when the issue is complete and has been merged in main then add the completed tag and close the issue


# Other Resources #
- [The importance of unit testing](https://pflb.us/blog/unit-testing-importance/)
- [Clean code by Bob C. Martin summary](https://blog.knoldus.com/clean-code-robert-c-martins-way/)

## Intellij Plugins ##
- indent rainbow
- rainbow brackets

## VSCODE Addons ##
- prettier typescript errors
- prettier code formatter
- colorize
- indent rainbow
- rainbow brackets



#!/bin/zsh



rm -r dist

set -e # exit if the script encounters an error

npm run lint:fix

npm run build

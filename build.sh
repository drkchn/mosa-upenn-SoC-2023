#!/bin/zsh

rm -r dist

npm run lint:fix

npm run build

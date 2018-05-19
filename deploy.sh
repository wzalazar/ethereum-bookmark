#!/bin/bash

npm run ropsten
npm install -g travis-deploy-once
travis-deploy-once "npm run semantic-release"
#!/bin/sh
node ./node_modules/mocha/mocha.js  --reporter dot test.js
node ./node_modules/mocha/mocha.js  --reporter dot test2.js
node ./node_modules/mocha/mocha.js  --reporter dot test3.js

#!/bin/bash

rm -rf static/
cd web-app/
npm install

npm run build
cd ..
mkdir static
mv web-app/dist/static/** static
mv web-app/dist/index.html index.html

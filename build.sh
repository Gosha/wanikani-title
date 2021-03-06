#!/bin/bash

VERSION=$(jq -r .version src/manifest.json)
zip wanikani-title-v$VERSION.zip \
    src/*.png \
    src/*.js \
    src/*.json

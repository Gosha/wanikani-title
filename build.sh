#!/bin/bash

VERSION=$(jq -r .version src/manifest.json)
./crxmake.sh src src.pem
mv src.crx wanikani-title-v$VERSION.crx

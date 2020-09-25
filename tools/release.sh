#!/usr/bin/env bash
set -xeu

VERSION=v$(cat ./manifest.json | grep \"version\" |
    sed -e "s/^.*\"version\":.*\"\(.*\)\",.*/\1/g")
#VERSION=v$(cat ./manifest.json | jq -r '.version')

git tag $VERSION
git push origin $VERSION

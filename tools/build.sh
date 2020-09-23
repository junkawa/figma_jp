#!/usr/bin/env bash
set -xeu

OUTPUT_DIR='./dist'
SRC_DIR='./figma_jp'

if [ -d $OUTPUT_DIR ]; then
    rm -rf $OUTPUT_DIR
fi
mkdir $OUTPUT_DIR

cp -a $SRC_DIR manifest.json $OUTPUT_DIR

#VERSION=$(cat ./manifest.json | grep \"version\" |
#    sed -e "s/^.*\"version\":.*\"\(.*\)\",.*/\1/g")
#PACKAGE_DIR=$OUTPUT_DIR/"figma_jp_"$VERSION"_"$(date "+%Y%m%d%H%M")
#mkdir $PACKAGE_DIR
#cp -a $SRC_DIR manifest.json $PACKAGE_DIR

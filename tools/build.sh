#!/usr/bin/env bash
set -xeu

OUTPUT_DIR='./dist'
SRC_DIR='./figma_jp'

if [ -d $OUTPUT_DIR ]; then
    rm -rf $OUTPUT_DIR
fi
mkdir $OUTPUT_DIR

cp -a ${SRC_DIR}/* ${OUTPUT_DIR}/

#!/usr/bin/env bash
set -eu

# Get ready
#CLIENT_ID=''
#CLIENT_SECRET=''
#echo "https://accounts.google.com/o/oauth2/auth?response_type=code&scope=https://www.googleapis.com/auth/chromewebstore&client_id=$CLIENT_ID&redirect_uri=urn:ietf:wg:oauth:2.0:oob"
#CODE=''
#curl "https://accounts.google.com/o/oauth2/token" -d \
#    "client_id=$CLIENT_ID&client_secret=$CLIENT_SECRET&code=$CODE&grant_type=authorization_code&redirect_uri=urn:ietf:wg:oauth:2.0:oob"
#REFRESH_TOKEN=''

# expect to call from .github/workflows/release.yml

APP_ID='ekodckpnalonppfcddgnkoapajahbahc'

# Get Access Token for Chrome web store API
# https://developers.google.com/identity/protocols/oauth2/web-server#httprest_7
ACCESS_TOKEN=$(curl -s --data "refresh_token=$REFRESH_TOKEN" --data "client_id=$CLIENT_ID" --data "client_secret=$CLIENT_SECRET" --data "grant_type=refresh_token" https://oauth2.googleapis.com/token | jq -r '.access_token')

# Uploading a package and Publishing an item to the public
# https://developer.chrome.com/webstore/using_webstore_api
echo 'Uploading a package'
curl -s -H "Authorization: Bearer $ACCESS_TOKEN" -H "x-goog-api-version: 2" -X PUT -T $FILE_NAME https://www.googleapis.com/upload/chromewebstore/v1.1/items/$APP_ID
echo 'Publishing an item to the public'
curl -s -H "Authorization: Bearer $ACCESS_TOKEN" -H "x-goog-api-version: 2" -H "Content-Length: 0" -X POST https://www.googleapis.com/chromewebstore/v1.1/items/$APP_ID/publish

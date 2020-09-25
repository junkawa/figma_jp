#!/usr/bin/env bash
set -eux

# expect to call from .github/workflows/release.yml

APP_ID='ekodckpnalonppfcddgnkoapajahbahc'

# Get Access Token for Chrome web store API
# https://developers.google.com/identity/protocols/oauth2/web-server#httprest_7
#ACCESS_TOKEN=$(curl --data "refresh_token=$REFRESH_TOKEN" --data "client_id=$CLIENT_ID" --data "client_secret=$CLIENT_SECRET" --data "grant_type=refresh_token" https://oauth2.googleapis.com/token | jq -r '.access_token')
ACCESS_TOKEN=$(curl --data "refresh_token=$REFRESH_TOKEN" --data "client_id=$CLIENT_ID" --data "client_secret=$CLIENT_SECRET" --data "grant_type=refresh_token" https://www.googleapis.com/oauth2/v4/token | jq -r '.access_token')

# Uploading a package and Publishing an item to the public
# https://developer.chrome.com/webstore/using_webstore_api
#curl -H "Authorization: Bearer $ACCESS_TOKEN" -H "x-goog-api-version: 2" -X PUT -T $FILE_NAME -v https://www.googleapis.com/upload/chromewebstore/v1.1/items/$APP_ID
#curl -H "Authorization: Bearer $ACCESS_TOKEN" -H "x-goog-api-version: 2" -H "Content-Length: 0" -X POST -v https://www.googleapis.com/chromewebstore/v1.1/items/$APP_ID/publish
curl https://accounts.google.com/o/oauth2/revoke?token=$ACCESS_TOKEN

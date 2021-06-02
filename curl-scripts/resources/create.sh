API="http://localhost:4741"
URL_PATH="/create-entry"

curl "${API}${URL_PATH}" \
--include \
--request POST \
--header "Content-Type: application/json"\
--data '{
    "entry": {
      "text": "'"${TEXT}"'"
    }
  }'

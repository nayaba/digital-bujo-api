API="http://localhost:4741"
URL_PATH="/entries"

curl "${API}${URL_PATH}/${ID}" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--data '{
    "entry": {
      "text": "'"${TEXT}"'"
    }
  }'

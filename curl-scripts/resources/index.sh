API="http://localhost:4741"
URL_PATH="/entries"

curl "${API}${URL_PATH}" \
--include \
--header "Authorization: Bearer ${TOKEN}"

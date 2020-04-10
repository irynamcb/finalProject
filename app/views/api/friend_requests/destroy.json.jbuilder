json.friend_request do
    json.partial! "api/friend_requests/friend_request", friend_request: @friend_request
end
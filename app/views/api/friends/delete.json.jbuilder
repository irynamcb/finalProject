json.friend do
    json.set! @friend.id do
        json.partial! "api/friends/friend", friend: @friend
    end
end

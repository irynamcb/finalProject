json.search do
    @users.each do |user|
    json.set! user.id do
        json.partial! 'api/search/search', user: user
    end
    end
end
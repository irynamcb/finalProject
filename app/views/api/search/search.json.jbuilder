@users.each do |user|

    json.partial! 'api/search/search', user: search

end
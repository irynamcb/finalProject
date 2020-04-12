json.extract! user, :id, :first_name, :last_name, :email, :gender, :birthday, :about, :education, :location, :created_at
json.posts user.posts.map(&:id)
json.comments user.comments.map(&:id)
# mapping friend_requests by user_id
json.friend_requests user.incoming_friend_requests.map(&:user_id)
# mapping friends by friend_id
json.friends user.friends.map(&:friend_id)

if user.avatar.attached?
    json.avatarUrl url_for(user.avatar)
end
json.extract! user, :id, :first_name, :last_name, :email, :gender, :birthday, :about, :education, :location, :created_at
json.posts user.posts.map(&:id)
json.comments user.comments.map(&:id)
json.extract! post, :id, :author_id, :body, :parent_id

if post.photo.attached?
    json.photoUrl url_for(post.photo)
end

json.comments post.comments.map(&:id)
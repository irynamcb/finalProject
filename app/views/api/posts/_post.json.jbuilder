json.extract! post, :id, :author_id, :body, :parent_id
json.photoUrl url_for(post.photo)
json.comments post.comments.map(&:id)
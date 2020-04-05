json.extract! post, :id, :author_id, :body, :parent_id
json.comments post.comments.map(&:id)
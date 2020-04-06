json.extract! comment, :id, :author_id, :body, :post_id
json.likes comment.likes.map(&:id)
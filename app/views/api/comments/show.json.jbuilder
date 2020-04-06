json.comments do
  json.set! @comment.id do
    json.partial! 'api/comments/comment', comment: @comment
  end
end

json.comment_likes do
  @comment.likes.each do |like|
    json.set! like.id do
      json.partial! 'api/likes/like', like: like
    end
  end
end 
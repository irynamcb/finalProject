json.posts do
  json.set! @post.id do
    json.partial! 'api/posts/post', post: @post
    json.likeIds @post.like_ids
    json.commentIds @post.comment_ids
end
end


json.comments do
      @post.comments.each do |comment|
          json.set! comment.id do
          json.partial! 'api/comments/comment', comment: comment
    end
  end
end

json.likes do
  @post.likes.each do |like|
    json.set! like.id do
      json.partial! 'api/likes/like', like: like
    end
  end
end




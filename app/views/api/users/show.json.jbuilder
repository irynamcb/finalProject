json.users do
    json.set! @user.id do
    json.partial! "api/users/user", user: @user
    json.posts @user.posts.map(&:id)
    json.comments @user.posts.map(&:id)
  end
end 

json.posts do 
    @user.posts.each do |post| 
        json.set! post.id do
            json.partial! "api/posts/post", post: post
        end
    end
end

json.users do
    json.set! @user.id do
        json.partial! "api/users/user", user: @user
    end
end 

json.other_users do
    (@user.wall_users + @user.posts_on_wall_authors + @user.post_comment_authors).uniq.each do |wall_user|
        json.set! wall_user.id do
            json.partial! 'api/users/user', user: wall_user
        end
    end
end

json.posts do 
    (@user.posts + @user.posts_on_wall).uniq.each do |post| 
        json.set! post.id do
            json.partial! "api/posts/post", post: post
        end
    end
end


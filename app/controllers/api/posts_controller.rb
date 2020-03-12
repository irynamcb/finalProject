class Api::PostsController < ApplicationController


def index

@posts = Post.all.includes(:author)
                  .includes(:likes)
                  .includes(:likers)
                  .includes(:comments)
                  .includes(:comment_authors)
if @posts
  render :index
else
  flash.now[:errors] = ['Nothing found']
  render json: ['Nothing found'], status: :not_found
end  

end


def show
    @post = Post.includes(:author) 
                .includes(:likes)
                .includes(:likers)
                .includes(:comments)
                .includes(:comment_authors)
                .find_by(id: params[:id])
if @post
  render :show
else
  flash.now[:errors] = ['No post found :(']
  render json: ['No post found :('], status: :not_found
end
end

def create 
  @post = Post.new(post_params)

  if @post.save
    render :show
  else
    flash.now[:errors] = @post.errors.full_messages
    ender json: @post.errors.full_messages, status: 422
  end
end

def update
  @post = Post.find(params[:id])

  if @post.update(post_params)
    render :show
  else
    render json: @post.errors.full_messages, status: 422
  end
end

def destroy
  @post = Post.find(params[:id])

  if @post
    @post.destroy
    render :show
  else
    flash.now[:errors] = ['Cannot find post with that id']
    render json: ['Cannot find post with that id']
  end
end

private
def post_params
    params.require(:post).permit(:body, :author_id, :parent_id)
end   

end

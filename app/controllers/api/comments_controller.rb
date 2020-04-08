class Api::CommentsController < ApplicationController

def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      flash.now[:errors] = @comment.errors.full_messages
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])

    if @comment.update
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])

    if @comment
       @comment.destroy
       render :show
    else
      flash.now[:errors] = ['Cant find a comment']
      render json: ['Cant find a comment'], status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :author_id, :post_id)
     
  end    
end

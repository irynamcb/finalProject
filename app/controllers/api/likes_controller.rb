class Api::LikesController < ApplicationController

def create
    @like = Like.new(like_params)

    if @like.save
      render :show
    else
      flash.now[:errors] = @like.errors.full_messages
      render json: @like.errors.full_messages, status: 422
    end
  end
 
  def destroy
    @like = Like.find(params[:id])

    if @like
       @like.destroy
       render :show
    else
       render json: ["Can not find like"], status: 422
    end
  end

  private
  def like_params
    params.require(:like).permit(:author_id, :likeable_id, :likeable_type)
  end    

end

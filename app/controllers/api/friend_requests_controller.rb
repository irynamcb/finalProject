class Api::FriendRequestsController < ApplicationController


def create
    @friend_request = FriendRequest.new(user_id: current_user.id, friend_id: friend_request_params[:friend_id])

    if @friend_request.save 
      render :create, status: 200

    else 
      flash.now[:errors] = @friend_request.errors.full_messages
      render json: @friend_request.errors.full_messages, status: 422
    end
end


def destroy
  @friend_request = FriendRequest.find_by(friend_request_params)

  if @friend_request
    @friend_request.destroy
    render :destroy, status: 200
  else
    flash.now[:errors] = ['Error']
    render json: ['Error'], satus: 422
  end
end
  
private

def friend_request_params

  params.permit(:friend_id)
end   

end

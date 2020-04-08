class Api::FriendRequestsController < ApplicationController


def create
    @friend_request = FriendRequest.new(friend_request_params)

    if @friend_request.save 
      render json: ["Success"], status: 200

    else 
      flash.now[:errors] = @friend_request.errors.full_messages
      render json: @friend_request.errors.full_messages, status: 422
    end
end


def destroy
  @friend_request = FriendRequest.find_by(friend_request_params)

  if @friend_request
    @friend_request.destroy
    render json: ["Success"], status: 200
  else
    flash.now[:errors] = ['Cannot find post with that id']
    render json: ['Cannot find post with that id'], satus: 422
  end
end
  
private

def friend_request_params
    params.require(:friend_request).permit(:user_id, :friend_id)
end   

end

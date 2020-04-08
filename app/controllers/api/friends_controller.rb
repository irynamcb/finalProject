class Api::FriendsController < ApplicationController
  

def index
    @friends = current_user.friends
    render json: ["Success"], status: 200
end


def create 

  @friend = Friend.new(friend_params)   
  @friend_request = FriendRequest.find_by(user_id: friend_params[:user_id], friend_id: friend_params[:friend_id])
  @opposite_friend = Friend.new(user_id: friend_params[:friend_id], friend_id: friend_params[:user_id])
  @opposite_friend_request = FriendRequest.find_by(user_id: friend_params[:friend_id], friend_id: friend_params[:user_id])

 begin 
  Friend.transaction do
    @friend.save
    @opposite_friend.save
    @friend_request.destroy if @friend_request 
    @opposite_friend_request.destroy if @opposite_friend_request

    render json: ["Success"], status: 200

  end
  rescue ActiveRecord::RecordInvalid => exception
    flash.now[:errors] = @friend.errors.full_messages
    render json: @friend.errors.full_messages, status: 422
  end
end

def destroy

@friend = Friend.find_by(friend_id: params[:friend_id], user_id: current_user.id) 

  if @friend
    @friend.destroy
    render json: ["Success"], status: 200
  else
    flash.now[:errors] = ['Cannot find a friend']
    render json: ['Cannot find a friend'], status: 422
  end
end

private
def friend_params
    params.require(:friend).permit(:user_id, :friend_id)
  
end   

end

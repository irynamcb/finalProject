class Api::FriendsController < ApplicationController
  

def index
    @friends = current_user.friends
end


def create 

  @friend = Friend.new(friend_params)
  @friend_request = FriendRequest.find_by(friend_params)
  @opposite_friend = Friend.new(user_id: friend_params.friend_id, friend_id: friend_params.user_id)
  @opposite_friend_request = FriendRequest.find_by(user_id: friend_params.friend_id, friend_id: friend_params.user_id)

  Friend.transaction do
    @friend.save
    @opposite_friend.save
    @friend_request.destroy if @friend_request 
    @opposite_friend_request.destroy if @opposite_friend_request

    render json: status: 200
  end
  rescue ActiveRecord::RecordInvalid => exception
    flash.now[:errors] = @friend.errors.full_messages
    ender json: @friend.errors.full_messages, status: 422
  end
end

def destroy

@friend = Friend.find_by(friend_id: params[:friend_id], user_id: current_user.id) 

  if @friend
    @friend.destroy
    render json: status: 200
  else
    flash.now[:errors] = ['Cannot find a friend']
    render json: ['Cannot find a friend'], status: 422
  end
end

private
def friend_params
    params.permit(:user_id, :friend_id)
end   

end

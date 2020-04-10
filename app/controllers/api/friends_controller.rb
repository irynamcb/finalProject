class Api::FriendsController < ApplicationController
  
def create 

  @friend = Friend.new(user_id: current_user.id, friend_id: params[:id])   
  @friend_request = FriendRequest.find_by(user_id: current_user.id, friend_id: params[:id])
  @opposite_friend = Friend.new(user_id: params[:id], friend_id: current_user.id)
  @opposite_friend_request = FriendRequest.find_by(user_id: params[:id], friend_id: current_user.id)

 begin 
  Friend.transaction do
    @friend.save
    @opposite_friend.save
    @friend_request.destroy if @friend_request 
    @opposite_friend_request.destroy if @opposite_friend_request

    render :create, status: 200

  end
  rescue ActiveRecord::RecordInvalid => exception
    flash.now[:errors] = @friend.errors.full_messages
    render json: @friend.errors.full_messages, status: 422
  end
end

def destroy

@friend = Friend.find_by(friend_id: params[:id], user_id: current_user.id) 

  if @friend
    @friend.destroy
    render :destroy, status: 200
  else
    flash.now[:errors] = ['Cannot find a friend']
    render json: ['Cannot find a friend'], status: 422
  end
end

end

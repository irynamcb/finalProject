class Api::UsersController < ApplicationController

def show

    @user = User.includes(:posts_on_wall)
                .includes(:posts_on_wall_authors)
                .includes(:comments)
                .includes(:likes)
                .includes(:posts)
                .includes(:wall_users)
                .includes(:incoming_friend_requests)
                .includes(:outgoing_friend_requests)
                .includes(:friends)
                .find(params[:id])
    if @user
        render :show
    else 
      flash.now[:errors] = ['Cant find this user']
      render json: ['Cant find this user'], status: :not_found
    end

end

def create
    @user = User.new(user_params)
    if @user.save
        login!(@user) 
        render :show
    else  
        flash.now[:errors] = @user.errors.full_messages
        render json: @user.errors.full_messages, status: 422
    end
end

def update

    @user = User.find(params[:id])

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end

end

def destroy

    @user = User.find(params[:id])

    if @user
      @user.destroy
      render :show
    else
      flash.now[:errors] = ['Cant find this user']
      render json: ['Cant find this user'], status: 422
    end

end

def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :gender, :birthday, :about, :education, :location)
end
end

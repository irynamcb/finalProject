class Api::SearchController < ApplicationController


    def index

        @users = User.where("first_name ILIKE ? ", "%#{params[:search_key]}%").or(User.where("last_name ILIKE ? ", "%#{params[:search_key]}%"))
        # @users = User.where("first_name LIKE ? ", "Br%"
        if @users
            render :index
        else 
            flash.now[:errors] = ['Cant find anything']
            render json: ['Cant find anything'], status: :not_found
        end

    end
    
end

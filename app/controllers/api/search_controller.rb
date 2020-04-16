class Api::SearchController < ApplicationController


    def search

        # @users = User.where("first_name LIKE ? ", "%#{params[:search_key]}%")
        @users = User.where("first_name LIKE ? ", "Br%")
         if @users
            render :search
        else 
            flash.now[:errors] = ['Cant find anything']
            render json: ['Cant find anything'], status: :not_found
        end

    end
    
end

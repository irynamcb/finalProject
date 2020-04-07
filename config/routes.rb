Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

root to: 'static_pages#root'

namespace :api, defaults: {format: :json} do 
  resources :users, only: [:create, :edit, :update, :delete, :show]
  resource :session, only: [:create, :destroy]
  resources :likes, only: [:create, :destroy]
  resources :posts, only: [:index, :show, :create, :update, :destroy]
  resources :comments, only: [:show, :create, :update, :destroy]
  resources :friend_requests
  resources :friends
end

end

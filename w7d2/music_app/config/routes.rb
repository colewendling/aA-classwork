Rails.application.routes.draw do
  
  get 'users/create'
  get 'users/new'
  get 'users/index'
  get 'users/show'
 resource :session, only: [:new, :create, :destroy]
 resources :users
end

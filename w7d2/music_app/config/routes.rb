Rails.application.routes.draw do
  
  resources :bands 
  resource :session, only: [:new, :create, :destroy]
  resources :users
end

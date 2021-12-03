Rails.application.routes.draw do
  resources :orders
  resources :customers
  resources :products
  resources :categories
  resources :users

  delete '/ordersAll/:customer_id', to: 'orders#delete_orders_with_customer_id'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

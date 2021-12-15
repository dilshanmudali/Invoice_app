Rails.application.routes.draw do
  resources :invoices
  resources :orderdups
  resources :orders
  resources :customers
  resources :products
  resources :categories
  resources :users

  delete '/ordersFinal/:customer_id', to:'orders#delete_orders_with_customer_id_finalize'
  delete '/ordersAll/:customer_id', to: 'orders#delete_orders_with_customer_id'
  # delete '/ordersDup/:customer_id', to: 'orderdups#delete_orders_with_customer_id'
  # delete '/invoiceFalse', to: 'invoice#delete_invoices_with_false_order'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

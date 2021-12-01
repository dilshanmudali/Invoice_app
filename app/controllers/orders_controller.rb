class OrdersController < ApplicationController

    skip_before_action :authorize, only: [:index,:show,:create,:update,:destroy]

    def index 
        render json: Order.all 
    end

    def create 
        order = Order.create!(order_params) 
        render json: order, status: :created
    end

    
    def show 
        order = Order.find(params[:id])
        render json: order, status: :ok
    end

    def destroy 
        order = Order.find(params[:id])
        order.destroy
    end


    private 

    def order_params
        params.permit(:customer_id, :product_id, :product_price, :order_quantity, :order_total)
    end
end

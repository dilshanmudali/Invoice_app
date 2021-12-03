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

    def delete_orders_with_customer_id
        orders = Order.where(customer_id:params[:customer_id])
        orders.each do |order| 
            product = order.product
            orderQuantity = order.order_quantity
            updateQuantity = product.product_quantity + orderQuantity 
            product.update(product_quantity: updateQuantity)
        end
        Order.where(customer_id:params[:customer_id]).destroy_all
    end


    private 

    def order_params
        params.permit(:customer_id, :product_id, :product_price, :order_quantity, :order_total)
    end
end

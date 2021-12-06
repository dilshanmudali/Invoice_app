class OrderdupsController < ApplicationController

    
    skip_before_action :authorize, only: [:index,:show,:create,:update,:destroy]

    def index 
        render json: Orderdup.all 
    end

    def create 
        orderdup = Orderdup.create!(orderdup_params) 
        render json: orderdup, status: :created
    end


    def show 
        orderdup = Orderdup.find(params[:id])
        render json: orderdup, status: :ok
    end

    def destroy 
        orderdup = Orderdup.find(params[:id])
        orderdup.destroy
    end

    def delete_orders_with_customer_id
        Orderdup.where(customer_id:params[:customer_id]).destroy_all
    end


    private 

    def orderdup_params
        params.permit(:customer_id, :product_id, :invoice_id, :product_name, :product_price, :order_quantity, :order_total)
    end
end

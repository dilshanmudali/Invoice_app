class OrdersController < ApplicationController

    skip_before_action :authorize, only: [:index,:show]

    def index 
        render json: Order.all 
    end

    # def create 
    #     order = Order.create!(order_params) 
    #     render json: order, status: :created
    # end

    # private

    # def order_params
    #     params.permit(:category_name)
    # end

    # def show 
    #     customer = Customer.find(params[:id])
    #     render json: customer, status: :ok
    # end

    # def destroy 
    #     customer = Customer.find(params[:id])
    #     customer.destroy
    # end


    # private 

    # def order_params
    #     params.permit()
    # end
end

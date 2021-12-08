class CustomersController < ApplicationController

    skip_before_action :authorize, only: [:index,:show,:create,:update,:destroy]

    def index 
        render json: Customer.all 
    end

    def create 
        customer = Customer.create!(customer_params) 
        render json: customer, status: :created
    end

    def show 
        customer = Customer.find(params[:id])
        render json: customer, status: :ok
    end

    def destroy 
        customer = Customer.find(params[:id])
        customer.destroy
    end

    private

    def customer_params
        params.permit(:customer_name, :customer_contact, :customer_address, :user_id, :customer_email)
    end
end

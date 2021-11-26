class ProductsController < ApplicationController

    skip_before_action :authorize, only: [:index,:show]

    def index 
        render json: Product.all 
    end


    def create 
        product = Product.create!(product_params) 
        render json: product, status: :created
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

    def product_params
        params.permit(:product_name, :product_description, :product_price, :product_quantity, :category_id)
    end
end

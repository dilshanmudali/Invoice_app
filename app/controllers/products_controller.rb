class ProductsController < ApplicationController

    skip_before_action :authorize, only: [:index,:show,:create,:update,:destroy]

    def index 
        render json: Product.all 
    end


    def create 
        product = Product.create!(product_params) 
        render json: product, status: :created
    end

    def show 
        product = Product.find(params[:id])
        render json: product, status: :ok
    end

    def destroy 
        product = Product.find(params[:id])
        product.destroy
    end

    private

    def product_params
        params.permit(:product_name, :product_description, :product_price, :product_quantity, :category_id)
    end
end

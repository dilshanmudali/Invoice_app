class CategoriesController < ApplicationController

    skip_before_action :authorize, only: [:index,:show,:create,:update,:destroy]

    def index 
        render json: Category.all 
    end

    def create 
        category = Category.create!(category_params) 
        render json: category, status: :created
    end

    def show 
        category = Category.find(params[:id])
        render json: category, status: :ok
    end

    def destroy 
        category = Category.find(params[:id])
        category.destroy
    end
   
    def update 
        category = Category.find(params[:id])
        category.update(category_params)
        render json: category
    end

    private

    def category_params
        params.permit(:category_name, :user_id)
    end
end

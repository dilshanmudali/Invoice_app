class InvoicesController < ApplicationController

    skip_before_action :authorize, only: [:index,:show,:create,:update,:destroy]

    def index 
        render json: Invoice.all 
    end

    def create 
        invoice = Invoice.create!(invoice_params) 
        render json: invoice, status: :created
    end

    private

    def invoice_params
        params.permit(:customer_id, :invoice_num, :organization_name)
    end
end

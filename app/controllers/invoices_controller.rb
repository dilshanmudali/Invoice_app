class InvoicesController < ApplicationController

    skip_before_action :authorize, only: [:index,:show,:create,:update,:destroy]

    def index 
        render json: Invoice.all 
    end

    def create 
        invoice = Invoice.create!(invoice_params) 
        render json: invoice, status: :created
    end

    def destroy 
        invoice = Invoice.find(params[:id])
        invoice.destroy
    end

    def update 
        invoice = Invoice.find(params[:id])
        invoice.update(invoice_params)
        render json:invoice
    end

    
    # def delete_invoices_with_false_order
    #     Invoice.where(complete: false).destroy_all
    # end


    private

    def invoice_params
        params.permit(:customer_id, :invoice_num, :organization_name, :complete)
    end
end

class AddInvoiceToOrderdups < ActiveRecord::Migration[6.1]
  def change
    add_reference :orderdups, :invoice, null: false, foreign_key: true
  end
end

class CreateInvoices < ActiveRecord::Migration[6.1]
  def change
    create_table :invoices do |t|
      t.belongs_to :customer, null: false, foreign_key: true
      t.string :organization_name
      t.integer :invoice_num
      t.boolean :complete, null:false, default: false
      t.decimal :grand_total, default: 0, null: false
      t.belongs_to :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end

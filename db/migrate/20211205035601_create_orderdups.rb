class CreateOrderdups < ActiveRecord::Migration[6.1]
  def change
    create_table :orderdups do |t|
      t.belongs_to :customer, null: false, foreign_key: true
      t.belongs_to :product, null: false, foreign_key: true
      t.string :product_name
      t.decimal :product_price
      t.integer :order_quantity
      t.decimal :order_total
 
      t.timestamps
    end
  end
end

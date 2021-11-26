class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :product_name
      t.text :product_description
      t.decimal :product_price
      t.integer :product_quantity
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end

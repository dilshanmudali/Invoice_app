class CreateCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.string :customer_name
      t.integer :cstomer_contact
      t.text :customer_address
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

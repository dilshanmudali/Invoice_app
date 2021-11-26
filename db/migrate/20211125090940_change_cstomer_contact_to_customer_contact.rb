class ChangeCstomerContactToCustomerContact < ActiveRecord::Migration[6.1]
  def change 
    rename_column :customers, :cstomer_contact, :customer_contact
  end
end

class ProductSerializer < ActiveModel::Serializer
  attributes :id, :product_name, :product_description, :product_price, :product_quantity, :category_id
  # has_one :category 
  
end

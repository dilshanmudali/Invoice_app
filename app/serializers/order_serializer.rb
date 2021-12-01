class OrderSerializer < ActiveModel::Serializer
  attributes :id, :order_quantity, :product_id, :customer_id, :created_at
  has_one :customer
  has_one :product
end

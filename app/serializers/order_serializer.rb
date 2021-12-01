class OrderSerializer < ActiveModel::Serializer
  attributes :id, :order_quantity, :product_id, :product_price, :order_total, :customer_id, :created_at
  has_one :customer
  has_one :product
end

class OrderSerializer < ActiveModel::Serializer
  attributes :id, :order_quantity
  has_one :customer
  has_one :product
end

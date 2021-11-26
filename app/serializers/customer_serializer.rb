class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :customer_name, :customer_contact, :customer_address
  has_one :user
  has_many :products
  has_many :orders
end

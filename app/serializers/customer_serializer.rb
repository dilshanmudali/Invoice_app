class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :customer_name, :customer_email, :customer_contact, :customer_address
  has_one :user
  has_many :products
  has_many :orders
  has_many :invoices
  has_many :orderdups
end

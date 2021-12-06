class InvoiceSerializer < ActiveModel::Serializer
  attributes :id, :invoice_num, :organization_name, :customer_id
  has_one :customer
  has_many :orderdups

  
end

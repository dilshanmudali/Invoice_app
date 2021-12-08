class InvoiceSerializer < ActiveModel::Serializer
  attributes :id, :invoice_num, :organization_name, :complete, :customer_id, :grand_total,:created_at
  has_one :customer
  has_many :orderdups

  
end

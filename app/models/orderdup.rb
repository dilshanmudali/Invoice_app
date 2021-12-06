class Orderdup < ApplicationRecord
  belongs_to :customer
  belongs_to :product
  belongs_to :invoice
end

class Invoice < ApplicationRecord
  belongs_to :customer
  has_many :orderdups,dependent: :destroy
  # has_many :products,dependent: :destroy

  validates :invoice_num, presence: true, uniqueness: true
end

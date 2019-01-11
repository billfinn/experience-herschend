class Priority < ApplicationRecord
    belongs_to :intent
    accepts_nested_attributes_for :intent
  
    has_many :template_priorities
    has_many :templates, :through => :template_priorities
end

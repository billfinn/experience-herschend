class TemplatePriority < ApplicationRecord
    belongs_to :template
    belongs_to :priority
  
  
    accepts_nested_attributes_for :priority
end

class TagMapping < ApplicationRecord
  # belongs_to :page
  belongs_to :tag
  belongs_to :component
end

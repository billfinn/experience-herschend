class Component < ApplicationRecord
  has_ancestry

  belongs_to :component_group
  accepts_nested_attributes_for :component_group

  belongs_to :release_priority
  accepts_nested_attributes_for :release_priority

  has_many :component_items
  has_many :text_items, -> { order('component_items.position') }, :through => :component_items
  accepts_nested_attributes_for :component_items, :allow_destroy => true

  has_many :template_components
  has_many :templates, :through => :template_components
  # accepts_nested_attributes_for :template_components

  has_many :tag_mappings
  has_many :tags, :through => :tag_mappings
  accepts_nested_attributes_for :tag_mappings, :allow_destroy => true



end

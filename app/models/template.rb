class Template < ApplicationRecord

   has_many :pages

   has_many :template_components
   has_many :components, -> { order('template_components.position') }, :through => :template_components
   accepts_nested_attributes_for :template_components, :allow_destroy => true

   has_many :template_priorities
   has_many :priorities, -> { order('template_priorities.position') }, :through => :template_priorities
   accepts_nested_attributes_for :template_priorities, :allow_destroy => true

   has_many :hierarchy_mappings
   has_many :hierarchies, :through => :hierarchy_mappings
   accepts_nested_attributes_for :hierarchy_mappings, :allow_destroy => true

   has_many :site_template_mappings
   has_many :sites, :through => :site_template_mappings
   accepts_nested_attributes_for :site_template_mappings, :allow_destroy => true

   has_many :page_template_mappings
   has_many :pages, :through => :page_template_mappings
   accepts_nested_attributes_for :page_template_mappings, :allow_destroy => true

   has_many :tag_mappings
   has_many :tags, :through => :tag_mappings
   accepts_nested_attributes_for :tag_mappings, :allow_destroy => true


end

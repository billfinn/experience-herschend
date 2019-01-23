class Tag < ApplicationRecord  
  has_ancestry

  # has_many :tag_mappings
  # has_many :pages, :through => :tag_mappings
  # accepts_nested_attributes_for :tag_mappings

  has_many :site_tag_mappings
  has_many :sites, :through => :site_tag_mappings
  accepts_nested_attributes_for :site_tag_mappings, :allow_destroy => true


  # scope :for_site, -> { joins( :site_tag_mappings ).where( site_tag_mappings: { site_id: (params[:id]) }) }
  # scope :for_jci, -> { joins( :site_tag_mappings ).where( site_tag_mappings: { site_id: 1 }) }
  # scope :for_tyco, -> { joins( :site_tag_mappings ).where( site_tag_mappings: { site_id: 2 }) }

  # Tag.joins( :site_tag_mappings ).where( site_tag_mappings: { site_id: (params[:id]) })
  # def self.json_tree(nodes)
  #     nodes.map do |node, sub_nodes|
  #       {:name => node.name, :id => node.id, :children => Tag.json_tree(sub_nodes).compact}
  #     end
  # end

  def self.json_tree(nodes)
      nodes.map do |node, sub_nodes|
        {:name => node.name, :id => node.id, :children => Tag.json_tree(sub_nodes).compact}
      end
  end

end

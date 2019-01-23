class AddColumnsToTagMappings < ActiveRecord::Migration[5.1]
  def change
    add_column :tag_mappings, :component_id, :integer
    add_column :tag_mappings, :template_id, :integer
  end
end

class AddFieldsToComponent < ActiveRecord::Migration[5.1]
  def change
    add_column :components, :ancestry, :integer
    add_column :components, :position, :integer
  end
end

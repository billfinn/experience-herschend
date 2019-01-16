class ChangeAncestryToBeStringInComponents < ActiveRecord::Migration[5.1]
  def change
    change_column :components, :ancestry, :string
  end
end

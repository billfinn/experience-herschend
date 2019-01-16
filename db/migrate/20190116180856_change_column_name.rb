class ChangeColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :components, :releasepriority_id, :release_priority_id
  end
end

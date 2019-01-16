class AddReleasePriorityToComponent < ActiveRecord::Migration[5.1]
  def change
    add_column :components, :releasepriority_id, :integer
  end
end

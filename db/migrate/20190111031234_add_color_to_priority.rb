class AddColorToPriority < ActiveRecord::Migration[5.1]
  def change
    add_column :priorities, :color, :string
  end
end

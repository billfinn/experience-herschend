class CreateTemplatePriorities < ActiveRecord::Migration[5.1]
  def change
    create_table :template_priorities do |t|
      t.integer :template_id
      t.integer :priority_id
      t.integer :position

      t.timestamps
    end
  end
end

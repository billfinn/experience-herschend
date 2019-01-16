class CreateReleasePriorities < ActiveRecord::Migration[5.1]
  def change
    create_table :release_priorities do |t|
      t.string :name
      t.string :description
      t.string :color

      t.timestamps
    end
  end
end

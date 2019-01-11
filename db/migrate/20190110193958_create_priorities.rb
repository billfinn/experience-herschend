class CreatePriorities < ActiveRecord::Migration[5.1]
  def change
    create_table :priorities do |t|
      t.string :name
      t.string :goal
      t.integer :intent_id
      t.string :action
      t.string :components
      t.string :customervalue
      t.string :businessvalue
      t.string :personalizaitonopportunities

      t.timestamps
    end
  end
end

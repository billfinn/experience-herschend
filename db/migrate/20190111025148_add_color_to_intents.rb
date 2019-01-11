class AddColorToIntents < ActiveRecord::Migration[5.1]
  def change
    add_column :intents, :color, :string
  end
end

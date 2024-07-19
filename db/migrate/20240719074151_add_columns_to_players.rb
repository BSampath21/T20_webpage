class AddColumnsToPlayers < ActiveRecord::Migration[7.1]
  def change
    add_column :players, :role, "ENUM('allrounder', 'bowler', 'batsman') DEFAULT 'batsman'" , null: false
    add_column :players, :is_captain, :boolean, null: false, default: false
    add_column :players, :is_active, :boolean, null: false, default: true
    add_column :players, :description, :text 
  end
end

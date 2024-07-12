class AddColumnTeams < ActiveRecord::Migration[7.1]
  def change
    add_column :teams, :name, :string, null:false
    add_index :teams, :name, unique:true
    add_column :teams, :country, :string, null:false 
    add_column :teams, :founded, :year
  end
end

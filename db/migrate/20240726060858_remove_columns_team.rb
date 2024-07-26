class RemoveColumnsTeam < ActiveRecord::Migration[7.1]
  def change
    remove_column :teams, :home_team_id_id
  end
end

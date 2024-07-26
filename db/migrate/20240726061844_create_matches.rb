class CreateMatches < ActiveRecord::Migration[7.1]
  def change
    create_table :matches do |t|
      t.date :date
      t.string :location
      t.references :home_team
      t.references :away_team
      t.timestamps
    end
  end
end

class Match < ApplicationRecord

    scope :upcoming, -> { where("date > ?", Time.now) }

  belongs_to :home_team, class_name: 'Team'
  belongs_to :away_team, class_name: 'Team'

 
end

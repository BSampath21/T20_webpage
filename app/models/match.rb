class Match < ApplicationRecord

    belongs_to :home_team, class_name: 'Team'
  belongs_to :away_team, class_name: 'Team'

    before_create :validate_future_date
    after_create :log_creation_message

scope :upcoming, -> { where("date > ?", Time.now) }

validates :date, presence: true
validates :location, presence: true
validates :home_team_id, presence: true
validates :away_team_id, presence: true

  def validate_future_date
    if date.present? && date < Date.today
     errors.add(:date, "cannot be in the past")
     throw(:abort)
    end
   end
 
   def log_creation_message
     Rails.logger.info("Match created: #{self.inspect}")
   end
  
 
end

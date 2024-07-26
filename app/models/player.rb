class Player < ApplicationRecord
    belongs_to :team

    default_scope { where(is_active: true) }
    scope :allrounder, -> { where(role: 'allrounder') }

  before_destroy :delete_captain
  after_create :update_team_player_count
  after_destroy :update_team_player_count
  before_create :checking_captain

    validates :name, presence: true
    validates :age, presence: true, numericality: { only_integer: true}
    validates :position, presence: true
    validates :team, presence: true
    validates :role, presence: true
    validates :is_captain, presence: true
    validates :is_active, presence: true
   
    private

    def delete_captain
        if is_captain?
          errors[:base] = "Can't delete captain"
          throw(:abort)
        end
      end
  
      def update_team_player_count
        team.update(player_count: team.players.count)
      end
  
      def checking_captain
        if team.players.where(is_captain: true).exists?
          errors[:base] = "Team contains captain"
          throw(:abort)
        end
      end
    
end



  
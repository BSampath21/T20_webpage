class Player < ApplicationRecord
    belongs_to :team

    default_scope { where(is_active: true) }
    scope :allrounder, -> { where(role: 'allrounder') }

    validates :name, presence: true
    validates :age, presence: true, numericality: { only_integer: true}
    validates :position, presence: true
    validates :team, presence: true
    validates :role, presence: true
    validates :is_captain, presence: true
    validates :is_active, presence: true
    
end



  
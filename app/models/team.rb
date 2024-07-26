class Team < ApplicationRecord
  has_many :players, dependent: :destroy
  has_many :matches_as_team1, class_name: 'Match', foreign_key: 'home_team_id', dependent: :destroy
  has_many :matches_as_team2, class_name: 'Match', foreign_key: 'away_team_id', dependent: :destroy

  accepts_nested_attributes_for :players, allow_destroy: true



  scope :country, -> { where(country: 'India') }
  scope :older_than, ->(founded) { where('founded > ?', founded) }

    validates :name, presence: true, uniqueness: true
    validates :country, presence: true
    validates :founded, presence: true, numericality: { only_integer: true, greater_than: 1901 }


end

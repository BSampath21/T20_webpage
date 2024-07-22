class Team < ApplicationRecord
    has_many :players

    validates :name, presence: true, uniqueness: true
    validates :country, presence: true
    validates :founded, presence: true, numericality: { only_integer: true, greater_than: 1901 }

end

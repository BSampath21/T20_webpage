 require_relative 'config/environment'

# p Player.all

#  p Player.joins(:team).where("teams.name = ?","team d").select('players.name')

# p Player.where("players.age > ?",27).select('players.name')

# p Player.joins(:team).select('players.name','teams.name')

#  p Player.create(name: "Rohit", age: 34,position: 'Forward', team_id: 1 )

#  p Player.find_by(name: 'Player 10').update(name: 'Watson')

# p Player.find_by(name: 'Player 24').destroy 
 
p Team.left_outer_joins(:players).select('teams.name, count(players.id)').group('teams.id')



# Player.joins("INNER JOIN teams ON teams.id = players.team_id").where("teams.name = ?","team d").select('players.name')

#  p = Player.where("players.age < ?",29).select('players.name')

#p = Player.joins("INNER JOIN teams ON teams.id = players.team_id").select('players.name, teams.name')	

#  p = Player.create(name: "Rohit", age: 34,position: 'Forward', team_id: 1 )

#  p = Player.find_by(name: 'Player 10').update(name: 'Watson')

# p = Player.find_by(name: 'Player 24').destroy 

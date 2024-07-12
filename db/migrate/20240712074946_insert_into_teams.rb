class InsertIntoTeams < ActiveRecord::Migration[7.1]
  def change            
    Team.create(name:'Team F',country:'France',founded:1987)
    Team.create(name:'Team G',country:'Brazil',founded:1910)
    Team.create(name:'Team H',country:'Argentina',founded:1913)
    Team.create(name:'Team I',country:'Mexico',founded:1922)
    Team.create(name:'Team J',country:'Netherlands',founded:1923)
  end
end

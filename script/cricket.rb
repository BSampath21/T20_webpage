module Cricket

end
    class Player
        attr_accessor :name,:add_runs,:add_wickets
        
        def initialize(name,add_runs,add_wickets)
            @name=name
            @add_runs=0
            @add_wickets=0
        end

        def add_runs()
            @add_runs += add_runs
        end

        def add_wickets
            @add_wickets += add_wickets
        end

        def statistics
            {
              name: @name,
              runs: @add_runs,
              wickets: @add_wickets
            }
        end
    end

    class Team
        attr_accessor :name,:add_players
        def initialize(name)
          @name = name
          @players = []
        end

        def max_players
            
        end

        def add_players
           @players << player
        end

        def remove_player

        end

        def teamStatistics
          statistics = {}
          @players.each do |player|
          statistics[player.name] = player.statistics
          end
          statistics
        end
    end

    player_one = Cricket::Player.new("Rohit Sharma")

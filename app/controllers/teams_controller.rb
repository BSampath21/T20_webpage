class TeamsController < ApplicationController
    before_action :team_params, only: [:create, :update]
    before_action :authenticate_person!
    def show
        @team = Team.find(params[:id])
    end

    def index
        @teams = Team.all
    end
   
    def new
        @team = Team.new
    end

    def create
        @team = Team.new(team_params)
       if @team.save
        flash[:notice] = "Team was created successfully"
        redirect_to @team
       else
        render 'new', status: :unprocessable_entity
       end
    end
    
    def edit
        @team = Team.find(params[:id])
    end
    
    def update
        @team = Team.find(params[:id])
        
        if @team.update(team_params)
            flash[:notice] = "Team was updated successfully"
            redirect_to @team
          else
            render 'new', status: :unprocessable_entity
          end
    end

    def destroy
        @team = Team.find(params[:id])
        @team.destroy
        redirect_to teams_path
    end

     private

     def team_params
        params.require(:team).permit(:name, :country, :founded, :description,
          players_attributes: [:id, :name, :age, :position, :role, :is_captain, :is_active, :description, :_destroy])
      end
end

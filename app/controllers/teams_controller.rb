class TeamsController < ApplicationController
    before_action :permit_params, only: [:create, :update]
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
        @team = Team.new(params[:team])
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
        
        if @team.update(params[:team])
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

    # private

   def permit_params
      params.permit!
   end

    # def team_params
    #     params.require(:team).permit(:name, :country, :founded, :description)
    # end
    
end

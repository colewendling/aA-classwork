class Api::PokemonController < ApplicationController
    def index
        render :index
    end

    def show
        render :show
    end

    private

    def pokemon_params
        params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :image_url)
    end
end

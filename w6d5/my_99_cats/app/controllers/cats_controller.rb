class CatsController < ApplicationController

    def index
        @cats = Cat.all
        render :index
    end

    def show
        @cat = Cat.find_by(id: params[:id]) # @Cat = Cat.find(params[:id])
        
        if @cat
            render :show
        else
            render :index
        end
    end

end

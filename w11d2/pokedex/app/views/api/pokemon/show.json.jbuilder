json.pokemon do #renders pokemon
json.set! @pokemon.id do
  json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type
  begin
    json.image_url asset_path("pokemon_snaps/#{@pokemon.image_url}") #image path to assets
  rescue
    json.image_url @pokemon.image_url # fixes path from above
  end
end
end

json.moves do #renders pokemon moves
  @pokemon.moves.each do |move|
    json.set! move.id do
        json.extract! move, :id, :name 
    end
  end
end


if @pokemon.items.length != 0 #renders pokemon items
  json.items do 
    
    @pokemon.items.each do |item|  #render item info from array of items
      json.set! item.id do 
        json.extract! item, :id, :pokemon_id, :name, :price, :happiness
        json.image_url asset_path(item.image_url) #image_url asset path to render item image
      end
    end
  end
else
    json.items ({}) #the pokemon is holding no items
end
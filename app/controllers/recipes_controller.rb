class RecipesController < ApiController
  def index
    @recipes = Recipe.all
    render json: @recipes.to_json
  end

  def show
    @recipe = Recipe.find(params[:id])
    render json: @recipes.to_json
  end
end

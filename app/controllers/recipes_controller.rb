class RecipesController < ApiController
  def index
    @recipes = Recipe.all
    @reviews = Review.all
    render json: @recipes.to_json(include: @reviews)
  end

  def show
    @recipe = Recipe.find(params[:id])
    render json: @recipes.to_json
  end
end

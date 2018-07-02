class RecipesController < ApiController
  def index
    @recipes = Recipe.all
    @reviews = Review.all
    render json: {recipes: @recipes.as_json, reviews: @reviews.as_json}
  end

  def show
    @recipe = Recipe.find(params[:id])
    render json: @recipes.to_json
  end
end

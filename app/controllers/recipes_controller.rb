class RecipesController < ApiController
  def index
    @recipes = Recipe.all
    @reviews = Review.all
    render json: {recipes: @recipes.as_json, reviews: @reviews.as_json}
  end
  
  def addLikes
    @recipe = Recipe.find(params[:recipe_id])
    @recipe.increment!(:likes, 1)
    @recipes = Recipe.all
    render json: {recipes: @recipes.as_json}
  end
end
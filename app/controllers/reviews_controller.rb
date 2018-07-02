class RecipesController < ApiController
    def index
      @reviews = Review.all
      render json: {reviews: @reviews.as_json}
    end
  
    def show
      @recipe = Recipe.find(params[:id])
      render json: @recipes.to_json
    end
  end
  
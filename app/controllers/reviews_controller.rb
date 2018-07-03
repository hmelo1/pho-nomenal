class ReviewsController < ApiController
  def index
    @reviews = Review.all
    render json: {reviews: @reviews.as_json}
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      @reviews = Review.all
      render json: {reviews: @reviews.as_json}
    else 
      render json: { error: "Error creating post!s"}
    end
  end

  private

  def review_params
    params.permit(:user, :review)
  end  
end
  
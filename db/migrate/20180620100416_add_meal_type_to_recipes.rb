class AddMealTypeToRecipes < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :meal_type, :string
  end
end

class AddMainIngredientToRecipes < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :main_ingredient, :string
  end
end

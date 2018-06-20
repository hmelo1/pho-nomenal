class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :description
      t.string :steps
      t.string :source

      t.timestamps
    end
  end
end

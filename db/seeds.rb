# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

pho1 = Recipe.create(
  title: "Pho Bo",
  description: "Authentic South Vietnamese Style Pho!",
  steps: "Place the beef knuckle in a very large (9 quart or more) pot. Season with salt, and fill pot with 2 gallons of water. Bring to a boil, and cook for about 2 hours.
    Skim fat from the surface of the soup, and add the oxtail, radish and onions. Tie the anise pods, cinnamon stick, cloves, peppercorns and ginger in a cheesecloth or place in a spice bag; add to the soup. Stir in sugar, salt and fish sauce. Simmer over medium-low heat for at least 4 more hours (the longer, the better). At the end of cooking, taste, and add salt as needed. Strain broth, and return to the pot to keep at a simmer. Discard spices and bones. Reserve meat from the beef knuckle for other uses if desired.
    Bring a large pot of lightly salted water to a boil. Soak the rice noodles in water for about 20 minutes, then cook in boiling water until soft, but not mushy, about 5 minutes. Slice the frozen beef paper thin. The meat must be thin enough to cook instantly.
    Place some noodles into each bowl, and top with a few raw beef slices. Ladle boiling broth over the beef and noodles in the bowl. Serve with hoisin sauce and Sriracha sauce on the side. Set onion, cilantro, bean sprouts, basil, green onions, and lime out at the table for individuals to add toppings to their liking.",
  source: "https://www.allrecipes.com/recipe/57354/beef-pho/",
  meal_type: "Special",
  main_ingredient: "Beef"
)
#soup, appetizer, beverages, sandwiches
pho1.ingredients.create(description: "5 pounds beef knuckle")
pho1.ingredients.create(description: "2 pounds beef oxtail")
pho1.ingredients.create(description: "1 daikon, sliced")
pho1.ingredients.create(description: "2 onions, chopped")
pho1.ingredients.create(description: "2 ounches whole star anise")
pho1.ingredients.create(description: ".5 cinnamon stick")
pho1.ingredients.create(description: "2 whole cloves of garlic")
pho1.ingredients.create(description: "1 teaspoon of black peppercorns")
pho1.ingredients.create(description: "1 slice fresh ginger root")
pho1.ingredients.create(description: "1 tablespoon white sugar")
pho1.ingredients.create(description: "1 tablespoon salt")
pho1.ingredients.create(description: "1 tablespoon fish sauce")
pho1.ingredients.create(description: "1.5 pounds dried flat rice noodles")
pho1.ingredients.create(description: ".5 pound frozen beef sirloin")
summerRolls = Recipe.create(
  title: "Goi Cuon",
  description: "Delicious, fresh summer rolls!",
  steps: "Bring a medium saucepan of water to boil. Boil rice vermicelli 3 to 5 minutes, or until al dente, and drain.
    Fill a large bowl with warm water. Dip one wrapper into the hot water for 1 second to soften. Lay wrapper flat. In a row across the center, place 2 shrimp halves, a handful of vermicelli, basil, mint, cilantro and lettuce, leaving about 2 inches uncovered on each side. Fold uncovered sides inward, then tightly roll the wrapper, beginning at the end with the lettuce. Repeat with remaining ingredients.
    In a small bowl, mix the fish sauce, water, lime juice, garlic, sugar and chili sauce.
    In another small bowl, mix the hoisin sauce and peanuts.
    Serve rolled spring rolls with the fish sauce and hoisin sauce mixtures.",
  source: "https://www.allrecipes.com/recipe/24239/vietnamese-fresh-spring-rolls/",
  meal_type: "Appetizer",
  main_ingredient: "Shrimp"
)
summerRolls.ingredients.create(description: "2 ounces rice vermicelli")
summerRolls.ingredients.create(description: "8 Rice wrappers")
summerRolls.ingredients.create(description: "12 large cooked shrimp")
summerRolls.ingredients.create(description: "1.3 tablespoons fresh thai basil")
summerRolls.ingredients.create(description: "3 tablespoons chopped fresh mint leaves")
summerRolls.ingredients.create(description: "3 tablespoons chopped fresh cilantro")
summerRolls.ingredients.create(description: "2 leaves lettuce")
summerRolls.ingredients.create(description: "2 teaspoons fish sauce")

coffee = Recipe.create(
  title: "Ca phe Sua Da",
  description: "Vietnamese Iced Coffee!",
  steps: "Brew coffee with water using your preferred method to make brewed coffee. Spoon 2 tablespoons of sweetened condensed milk into each of 4 coffee cups. Pour 1 cup of fresh hot coffee into each cup, and stir to dissolve the milk.
    Serve guests cups of coffee, and give each one a tall glass with 4 ice cubes, and a long handled spoon. Guests pour hot coffee over the ice cubes and stir briskly with the long handled spoon, making an agreeable clatter with the ice cubes to chill the coffee.",
  meal_type: "Beverage",
  main_ingredient: "Coffee"
)

coffee.ingredients.create(description: "Dark Roast coffee")
coffee.ingredients.create(description: "Iced Cubes")
coffee.ingredients.create(description: "Sweetended Condensed Milk")

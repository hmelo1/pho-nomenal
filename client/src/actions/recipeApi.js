class RecipeApi {
  static fetchRecipes(){
    return fetch('api/recipes').then(response => {
      return response.json()
    }).then(recipesPayload => {
      return recipesPayload.recipes
    })
  }
}

export default RecipeApi;

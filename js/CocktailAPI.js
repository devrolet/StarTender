class CocktailAPI{
    async getDrinksByName(name) {
        // Search by name
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        // returns a json response
        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }

    // Get recipes by ingredients
    async getDrinksByIngredient(ingredient) {
        // Search by ingredient
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        // Wait for response then return JSON
        const cocktails = await apiResponse.json();
        return {
            cocktails
        }
    }

    // get single recipe
    async getSingleRecipe(id) {
        // Search by ingredient
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        // Wait for response then return JSON
        const recipe = await apiResponse.json();
        return {
            recipe
        }
    }
}
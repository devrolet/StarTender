class CocktailAPI{
    // Helper function to refactor duplicate code
    async _fetchData(endpoint) {
        const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
        const response = await fetch(`${baseUrl}${endpoint}`);
        return await response.json();
    }

    async getDrinksByName(name) {
        // Search by name
        const cocktails = await this._fetchData(`/search.php?s=${name}`);
        return { cocktails }
    }

    // Get recipes by ingredients
    async getDrinksByIngredient(ingredient) {
        // Search by ingredient
        const cocktails = await this._fetchData(`/filter.php?i=${ingredient}`);
        return { cocktails }
    }

    // get single recipe
    async getSingleRecipe(id) {
        // Search by ingredient
        const recipe = await this._fetchData(`lookup.php?i=${id}`);
        return { recipe }
    }

    // Retrieves all the categories from the REST API
    async getCategories() {
        const categories = await this._fetchData('/list.php?c=list');
        return { categories }
    }

    // Get Drinks by Category
    async getDrinkByCategory(category) {
        // Search by category
        const cocktails = await this._fetchData(`/filter.php?c=${category}`);
        return { cocktails }
    }

    // Get alcohol or non-alcohol drinks
    async getDrinksByAlcohol(term) {
        // Search by alcohol or non-alcohol
        const cocktails = await this._fetchData(`/filter.php?a=${term}`);
        return { cocktails }
    }
}
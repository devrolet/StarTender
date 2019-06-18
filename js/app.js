// Instantiate classes
const ui = new UI(),
      cocktail = new CocktailAPI();


// Event Listeners
function eventListeners() {
    // Document Ready
    document.addEventListener('DOMContentLoaded', documentReady);
    
    // Add event listener when form is submitted
    const searchForm = document.querySelector('#search-form');
    if(searchForm) {
        searchForm.addEventListener('submit', getCocktails);
    }

    // The results div listeners
    const resultsDiv = document.querySelector('#results');
    if(resultsDiv) {
        resultsDiv.addEventListener('click', resultsDelegation);
    }
}

eventListeners();

// Get cocktails function
function getCocktails(e) {
    e.preventDefault();
    
    // Get input field value
    const searchTerm = document.querySelector('#search').value;

    // Check if there is a value in search term
    if(searchTerm === '') {
        // Call User Interface print message
        ui.printMessage('Please add something into the form', 'danger');
    } else {
        // Server response from promise
        let serverResponse;

        // Type of search
        const type = document.querySelector('#type').value;

        // Evaluate the type of method
        switch(type) {
            case 'name':
                serverResponse = cocktail.getDrinksByName(searchTerm);
                break;
            case 'ingredient':
                serverResponse = cocktail.getDrinksByIngredient(searchTerm);
                break;
            case 'category':
                serverResponse = cocktail.getDrinkByCategory(searchTerm);
                break;
        }

        ui.clearResults();

        // Query by name of drink
        serverResponse.then(cocktails => {
            if(cocktails.cocktails.drinks === null) {
                // Nothing exists
                ui.printMessage('There are no results, try a different term', 'danger');
            } else {
                if(type === 'name') {
                    // Display with ingredients
                    ui.displayDrinksWithIngredients(cocktails.cocktails.drinks);
                } else {
                    // Display without ingredients
                    ui.displayDrinks(cocktails.cocktails.drinks);
                }
            }
        })
    }
}

// Delegation for results area
function resultsDelegation(e) {
    e.preventDefault();

    if(e.target.classList.contains('get-recipe')) {
        cocktail.getSingleRecipe(e.target.dataset.id)
            .then(recipe => {
                // Displays single recipe in a modal
               ui.displaySingleRecipe(recipe.recipe.drinks[0]);
            })
}

}

// Document Ready
function documentReady() {

    // Select the search category select
    const searchCategory = document.querySelector('.search-category');
    if(searchCategory) {
        ui.displayCategories();
    }
}
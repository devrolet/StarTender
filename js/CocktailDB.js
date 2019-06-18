class CocktailDB {
    // Methods to work with Local Storage

    // Save the recipes from local storage
    saveIntoDB(drink) {
        const drinks = this.getFromDB();

        drinks.push(drink);

        // Add the new array into localstorage
        localStorage.setItem('drinks', JSON.stringify(drinks));
    }

    // Return recipes from storage
    getFromDB() {
        let drinks;
        // Check from localstorage
        if(localStorage.getItem('drinks') === null) {
            drinks = [];
        } else {
            drinks = JSON.parse(localStorage.getItem('drinks'));
        }
        return drinks;
    }
}
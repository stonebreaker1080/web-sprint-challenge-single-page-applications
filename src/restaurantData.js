
const data = [
    {
        title: "pizza",
        subtitle:"American - Pizza",
        waitTime: "20-30 Min",
        deliveryFee: 5.99,
        toppings: [ 'Pepperoni', 'Sausage', "Canadian Bacon", 'Spicy Italian Sausage',
                    'Grilled Chicken', "Onions", 'Green Peppers', "Diced Tomatoes",
                    'Black Olives', 'Roasted Garlic', 'Artichoke Hearts', 'Three Cheese',
                    'Pineapple', 'Extra Cheese'],
        sauces: {   'Original Red': false,
                    'Garlic Ranch': false,
                    'BBQ Sauce': false,
                    'Spinach Alfredo': false
                },
        substitutes: ['Gluten Free Crust $1', 'Whole Grain Crust $2']
    }

]

export default function restaurantData()  {
    return data
}
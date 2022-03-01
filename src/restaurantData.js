
const data = [
    {
        title: "PizzaHut",
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
    },
    {
        title: "sweetgreen",
        subtitle:"Healthy - Salads",
        waitTime: "30-45 Min",
        deliveryFee: 4.99,
        toppings: [ 'carrots', 'walnuts'],
        sauces: {   'Ranch': false,
                    'Caesar': false
                },
        substitutes: ['premium', 'fancy kale']
        
    },
    {
        title: "Starbucks",
        subtitle:"American - Fast Food - Burgers",
        waitTime: "20-30 Min",
        deliveryFee: 5.99,
        toppings: [ 'caramel', 'chocolate'],
        sauces: {   'caramel': false,
                    'chocolate': false

                },
        substitutes: ['Oat Milk', 'decaf']
    }

]

export default function restaurantData()  {
    return data
}
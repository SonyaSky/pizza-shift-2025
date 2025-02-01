export const handleAddToCart = (pizza, activeType, activeSize, toppings, cartId) => {
    const selectedPizza = {
      id: pizza.id,
      cartId: cartId,
      description: pizza.description,
      name: pizza.name,
      img: pizza.img,
      quantity: 1,
      dough: pizza.doughs.find(dough => dough.name == activeType),
      size: pizza.sizes.find(size => size.name == activeSize),
      toppings: toppings.map(({ translatedName, ...rest }) => rest)
    };
    const toppingCost = toppings.reduce((total, topping) => total + topping.cost, 0);
    const fullPrice = selectedPizza.size.price  + selectedPizza.dough.price + toppingCost;
    selectedPizza.pizzaPrice = fullPrice;
    selectedPizza.fullPrice = fullPrice;
    const pizzaInfo = {
      doughs: pizza.doughs,
      sizes: pizza.sizes,
      toppings: pizza.toppings
    };
    selectedPizza.pizzaInfo = pizzaInfo;
    return selectedPizza;
  };

export default handleAddToCart;
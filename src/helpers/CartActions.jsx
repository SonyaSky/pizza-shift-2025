export const handleAddToCart = (pizza, activeType, activeSize, toppings) => {
    const selectedPizza = {
      id: pizza.id,
      name: pizza.name,
      img: pizza.img,
      dough: pizza.doughs.find(dough => dough.name == activeType),
      size: pizza.sizes.find(size => size.name == activeSize),
      toppings: toppings.map(({ translatedName, ...rest }) => rest)
    };
    const fullPrice = selectedPizza.size.price 
    + selectedPizza.dough.price 
    + toppings.map(topping => topping.cost);
    selectedPizza.fullPrice = fullPrice;
    return selectedPizza;
  };

export default handleAddToCart;
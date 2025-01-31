const toppingTranslations = {
  PINEAPPLE: 'Ананас',
  GREEN_PEPPER: 'Зеленый перец',
  MUSHROOMS: 'Грибы',
  BACON: 'Бекон',
  SHRIMPS: 'Креветки',
  HAM: 'Ветчина',
  MOZZARELLA: 'Моцарелла',
  PEPERONI: 'Пепперони',
  CHICKEN_FILLET: 'Куриное филе',
  ONION: 'Лук',
  BASIL: 'Базилик',
  CHILE: 'Чили',
  CHEDDAR: 'Чеддер',
  MEATBALLS: 'Фрикадельки',
  PICKLE: 'Маринованный огурец',
  TOMATO: 'Помидор',
  FETA: 'Фета'
};

const normalizeToppings = (topping) => {
  return topping.map((topping) => {
    const translatedName = toppingTranslations[topping.name];
    return {
      ...topping,
      name: translatedName
    };
  });
};

export default normalizeToppings;

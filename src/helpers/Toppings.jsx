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

const normalizeToppings = (topping, capitalLetter = true) => {
  return topping.map((topping) => {
    const translatedName = toppingTranslations[topping.name];
    const finalName = capitalLetter 
      ? translatedName 
      : translatedName.charAt(0).toLowerCase() + translatedName.slice(1);
    return {
      ...topping,
      translatedName: finalName
    };
  });
};

export default normalizeToppings;

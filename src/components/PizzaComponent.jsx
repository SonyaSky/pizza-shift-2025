import React from "react";


const PizzaComponent = ({imageUrl, title, description, price}) => {
    return (
        <div className='pizza-div col-3 col-3 d-flex flex-column'>
          <div className="row">
            <img src={imageUrl} alt='pizza'></img>
          </div>
          <div className="row">
            <p className='pizza-title'>{title}</p>
            <div className='pizza-desc'>{description}</div>
          </div>
          <footer className="mt-auto">
            <div className="pizza-price">
              от {price} ₽
            </div>
            <div className="row">
                <button type='button' className='btn pizza-button'>
                    Выбрать
                </button>
            </div>
          </footer>
        </div>
    )
}

export default PizzaComponent;
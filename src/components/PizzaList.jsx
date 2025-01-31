import React, { useEffect, useState } from 'react';
import { Grid } from '@mantine/core';

import PizzaCard from './PizzaCard';
import { fetchPizzas } from '../requests/FetchPizzas';

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const pizzaData = await fetchPizzas();
        setPizzas(pizzaData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getPizzas();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Grid className='pizzas-div row'>
      {pizzas.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </Grid>
  );
};

export default PizzaList;

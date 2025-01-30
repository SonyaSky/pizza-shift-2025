import { BASE_URL } from "../helpers/BaseUrl";

export const fetchPizzas = async () => {
    const response = await fetch(`${BASE_URL}/pizza/catalog`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.catalog; 
};
/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { listProducts } from '../api';
import { OrderLocationData } from '../models/OrderLocationData';
import { Product } from '../models/Product';
import OrderLocation from './OrderLocation';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [locationData, setLocationData] = useState<OrderLocationData>();

  useEffect(() => {
    listProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="route-content">
      <StepsHeader />
      <ProductsList products={products} />
      <OrderLocation onSelectLocation={(location) => setLocationData(location)} />
    </div>
  );
}

export default Orders;

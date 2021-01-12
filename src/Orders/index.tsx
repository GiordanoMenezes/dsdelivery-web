/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { listProducts, saveOrder } from '../api';
import { OrderDTO } from '../models/OrderDTO';
import { OrderLocationData } from '../models/OrderLocationData';
import { Product } from '../models/Product';
import { isProductSelected } from '../utils/isProductSelected';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [locationData, setLocationData] = useState<OrderLocationData>();

  useEffect(() => {
    listProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = isProductSelected(selectedProducts, product);

    if (isAlreadySelected) {
      setSelectedProducts((previous) => previous.filter((p) => p.id !== product.id));
    } else {
      setSelectedProducts((previous) => [...previous, product]);
    }
  };

  const postOrder = () => {
    if (!locationData) {
      toast.warning('Selecione um endereço de entrega!');
    } else if (selectedProducts.length < 1) {
      toast.warning('Selecione pelo menos 1 produto!');
    } else {
      const order: OrderDTO = {
        address: locationData!.address,
        latitude: locationData!.latitude,
        longitude: locationData!.longitude,
        products: selectedProducts.map((p) => ({ id: p.id })),
      };
      saveOrder(order).then((response) => {
        toast.success(`Pedido ${response.data.id} enviado com sucesso!`);
      });
    }
  };

  return (
    <div className="route-content">
      <StepsHeader />
      <ProductsList
        products={products}
        onSelectProduct={handleSelectProduct}
        selectedProducts={selectedProducts}
      />
      <OrderLocation onSelectLocation={(location) => setLocationData(location)} />
      <OrderSummary
        orderCount={selectedProducts.length}
        orderTotal={selectedProducts.reduce((sum, item) => sum + item.price, 0)}
        onMakeOrder={postOrder}
      />
    </div>
  );
}

export default Orders;

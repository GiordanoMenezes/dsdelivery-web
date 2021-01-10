import { Product } from '../models/Product';
import ProductCard from './ProductCard';

type Props = {
   products : Product[];
}

function ProductsList({ products }: Props) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map((p) => (
          <ProductCard product={p} key={p.id} />
        ))}

      </div>
    </div>
  );
}

export default ProductsList;

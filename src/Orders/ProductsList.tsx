import { Product } from '../models/Product';
import { isProductSelected } from '../utils/isProductSelected';
import ProductCard from './ProductCard';

type Props = {
   products : Product[];
   onSelectProduct: (product: Product) => void;
   selectedProducts: Product[];
}

function ProductsList({ products, onSelectProduct, selectedProducts }: Props) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map((p) => (
          <ProductCard
            product={p}
            key={p.id}
            onSelectProduct={onSelectProduct}
            isSelected={isProductSelected(selectedProducts, p)}
          />
        ))}

      </div>
    </div>
  );
}

export default ProductsList;

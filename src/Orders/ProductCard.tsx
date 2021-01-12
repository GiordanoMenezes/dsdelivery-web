/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Product } from '../models/Product';
import { CurrencyFormatter } from '../utils/CurrencyFormatter';

type Props = {
    product : Product;
    onSelectProduct: (product: Product) => void;
    isSelected: boolean;
}

function ProductCard({ product, onSelectProduct, isSelected }: Props) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={`order-card-container ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelectProduct(product)}
    >
      <h3 className="order-card-title">
        {product.name}
      </h3>
      <img src={product.imageUri} className="order-card-image" alt={product.name} />
      <h3 className="order-card-price">{CurrencyFormatter(product.price)}</h3>

      <div className="order-card-description">
        <h3>Descrição</h3>
        <p>
          {product.description}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;

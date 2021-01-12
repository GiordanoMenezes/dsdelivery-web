import { useState } from 'react';
import { fetchLocalMapBox } from '../../api';
import { CurrencyFormatter } from '../../utils/CurrencyFormatter';
import OrderLocation from '../OrderLocation';

type Props = {
  orderCount: number;
  orderTotal: number;
  onMakeOrder: () => void;
}

function OrderSummary({ orderCount, orderTotal, onMakeOrder }: Props) {
  return (
    <div className="order-summary-container">
      <div className="order-summary-content">
        <div>
          <span className="amount-selected-container">
            <strong className="amount-selected">{orderCount}</strong>
            PEDIDOS SELECIONADOS
          </span>
          <span className="order-summary-total">
            <strong className="amount-selected">{CurrencyFormatter(orderTotal)}</strong>
            VALOR TOTAL
          </span>
        </div>
        <button
          type="button"
          onClick={onMakeOrder}
          className="order-summary-make-order"
        >
          FAZER PEDIDO
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;

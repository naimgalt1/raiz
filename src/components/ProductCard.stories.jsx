import ProductCard from './ProductCard.jsx';
import { products } from '../data/products.js';

export default {
  title: 'Tienda/ProductCard',
  component: ProductCard,
  args: {
    product: products[0],
    onOpen: () => {},
    onAdd: () => {},
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
};

export const Mas_vendido = {};

export const Nuevo = {
  args: { product: products[1] },
};

export const Eco_pack = {
  args: { product: products[2] },
};

import ProductModal from './ProductModal.jsx';
import { products } from '../data/products.js';

export default {
  title: 'Tienda/ProductModal',
  component: ProductModal,
  args: {
    product: products[0],
    onClose: () => {},
    onAdd: () => {},
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Abierto = {};

export const Manteca = {
  args: { product: products[1] },
};

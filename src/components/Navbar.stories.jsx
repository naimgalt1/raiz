import Navbar from './Navbar.jsx';

export default {
  title: 'Layout/Navbar',
  component: Navbar,
  args: {
    cartCount: 0,
  },
};

export const Vacia = {};

export const ConProductos = {
  args: { cartCount: 3 },
};

import { useEffect, useState } from 'react';
import { formatPrice, renderStars } from '../utils/format.js';

/**
 * Ficha de producto. Se monta con `key={product.id}` desde el padre
 * para que la cantidad y el estado de "añadido" se reinicien en cada apertura.
 */
export default function ProductModal({ product, onClose, onAdd }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!product) return undefined;

    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleAdd = () => {
    onAdd(product, quantity);
    setAdded(true);
    setTimeout(onClose, 1200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
      onClick={(event) => event.target === event.currentTarget && onClose()}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-charcoal/55 p-6 backdrop-blur-sm"
    >
      <div className="relative grid max-h-[90vh] w-full max-w-4xl grid-cols-1 overflow-y-auto rounded bg-cream md:grid-cols-2">
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-5 right-5 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-beige text-charcoal transition-colors hover:bg-beige-dark"
        >
          ✕
        </button>

        <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />

        <div className="px-8 py-11">
          <p className="mb-2 text-[0.6rem] font-medium tracking-[0.15em] text-terra uppercase">{product.category}</p>
          <h2 className="mb-2 font-display text-3xl leading-tight font-medium text-charcoal">{product.name}</h2>
          <p className="mb-4 text-[0.7rem] text-terra">
            {renderStars(product.rating)} <span className="text-mid">({product.reviews})</span>
          </p>
          <p className="mb-1.5 font-display text-3xl font-medium text-charcoal">{formatPrice(product.price)}</p>
          <p className="mb-5 text-xs text-light">{product.size}</p>
          <p className="mb-6 text-[0.9rem] leading-[1.85] text-mid">{product.description}</p>

          <h3 className="mt-6 mb-3 font-display text-sm font-semibold tracking-[0.04em] text-charcoal uppercase">
            Ingredientes clave
          </h3>
          <div className="mb-6 flex flex-wrap gap-2">
            {product.ingredients.map((ingredient, index) => (
              <span
                key={ingredient}
                className={`rounded-full border px-3.5 py-1 text-xs ${
                  index < 2
                    ? 'border-moss/25 bg-moss-pale text-moss'
                    : 'border-beige-dark bg-beige text-mid'
                }`}
              >
                {ingredient}
              </span>
            ))}
          </div>

          <h3 className="mt-6 mb-3 font-display text-sm font-semibold tracking-[0.04em] text-charcoal uppercase">
            Beneficios
          </h3>
          <ul className="mb-7">
            {product.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-2.5 border-b border-beige-dark py-2 text-[0.85rem] text-mid"
              >
                <span className="text-xs text-moss">✓</span>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mb-4 flex w-fit items-center rounded-sm border border-beige-dark">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Quitar uno"
              className="h-10 w-10 cursor-pointer text-lg text-charcoal hover:bg-beige"
            >
              −
            </button>
            <span className="w-12 border-x border-beige-dark py-2 text-center font-display text-lg">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              aria-label="Añadir uno"
              className="h-10 w-10 cursor-pointer text-lg text-charcoal hover:bg-beige"
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            disabled={added}
            className={`flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-sm py-3.5 text-[0.72rem] font-medium tracking-[0.12em] uppercase transition-colors ${
              added ? 'bg-earth text-beige' : 'bg-moss text-beige hover:bg-moss-light'
            }`}
          >
            {added ? '¡Añadido! ✓' : 'Añadir al carrito 🛒'}
          </button>
        </div>
      </div>
    </div>
  );
}

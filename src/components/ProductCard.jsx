import { formatPrice, renderStars } from '../utils/format.js';

const badgeStyles = {
  best: 'bg-terra text-white',
  new: 'bg-moss text-beige',
  eco: 'border border-earth/20 bg-earth-pale text-earth',
};

const categoryLabels = { rostro: 'Rostro', cuerpo: 'Cuerpo', cabello: 'Cabello', labios: 'Labios' };

export default function ProductCard({ product, onOpen, onAdd }) {
  return (
    <article
      onClick={() => onOpen(product)}
      className="group cursor-pointer overflow-hidden rounded border border-beige-dark bg-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(74,103,65,0.1)]"
    >
      <div className="relative aspect-square overflow-hidden bg-beige">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <span
          className={`absolute top-3.5 left-3.5 rounded-full px-3 py-1 text-[0.6rem] font-medium tracking-[0.1em] uppercase ${badgeStyles[product.badge.tone]}`}
        >
          {product.badge.label}
        </span>

        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-cream/95 p-3.5 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onAdd(product, 1);
            }}
            className="w-full cursor-pointer rounded-sm bg-moss py-2.5 text-[0.65rem] font-medium tracking-[0.12em] text-beige uppercase transition-colors hover:bg-moss-light"
          >
            + Añadir al carrito
          </button>
        </div>
      </div>

      <div className="px-6 pt-5.5 pb-6.5">
        <p className="mb-1.5 text-[0.6rem] font-medium tracking-[0.15em] text-terra uppercase">
          {categoryLabels[product.category]}
        </p>
        <h3 className="mb-1.5 font-display text-[1.1rem] leading-tight font-medium text-charcoal">{product.name}</h3>
        <p className="mb-3.5 text-[0.8rem] leading-relaxed text-mid">{product.shortDesc}</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-display text-xl font-medium text-charcoal">{formatPrice(product.price)}</p>
            <p className="mt-0.5 text-[0.68rem] text-light">{product.size}</p>
          </div>
          <p className="text-[0.65rem] tracking-[0.08em] text-terra">{renderStars(product.rating)}</p>
        </div>
      </div>
    </article>
  );
}

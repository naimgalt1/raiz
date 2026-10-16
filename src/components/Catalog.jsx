import { useState } from 'react';
import Reveal from './Reveal.jsx';
import ProductCard from './ProductCard.jsx';
import SectionHeader from './SectionHeader.jsx';
import { categories, products } from '../data/products.js';

export default function Catalog({ onOpen, onAdd }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const visible = activeCategory === 'all' ? products : products.filter((p) => p.category === activeCategory);

  return (
    <section id="catalogo" className="bg-beige-light px-6 py-24 lg:px-18">
      <div className="mb-13 flex flex-wrap items-end justify-between gap-7">
        <Reveal>
          <SectionHeader
            label="Tienda"
            title={
              <>
                Nuestros <em className="text-moss italic">productos.</em>
              </>
            }
          />
        </Reveal>

        <Reveal delay={150} className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category.id)}
                className={`cursor-pointer rounded-full border px-5 py-2 text-[0.65rem] font-medium tracking-[0.12em] uppercase transition-colors ${
                  isActive
                    ? 'border-moss bg-moss text-beige'
                    : 'border-beige-dark bg-transparent text-mid hover:border-moss hover:text-moss'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((product, index) => (
          <Reveal key={product.id} delay={(index % 3) * 100}>
            <ProductCard product={product} onOpen={onOpen} onAdd={onAdd} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

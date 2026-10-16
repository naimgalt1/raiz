import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import { values } from '../data/content.js';

export default function Values() {
  return (
    <section id="valores" className="bg-cream px-6 py-24 lg:px-18">
      <Reveal className="mx-auto mb-18 max-w-xl text-center">
        <SectionHeader
          className="text-center"
          label="Por qué Raíz"
          title={
            <>
              Cosmética con <em className="text-moss italic">conciencia.</em>
            </>
          }
          lineClassName="mx-auto"
        />
        <p className="text-[0.97rem] leading-[1.85] text-mid">
          Creemos que lo que pones en tu piel importa tanto como lo que pones en tu plato. Por eso cada producto Raíz
          nace de la convicción de que la belleza no debería costarle nada a la tierra.
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-px bg-beige-dark sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value, index) => (
          <Reveal key={value.title} delay={index * 100} className="h-full">
            <article className="h-full bg-cream p-9 text-center transition-colors duration-300 hover:bg-moss-pale">
              <span className="mb-5 block text-4xl">{value.icon}</span>
              <h3 className="mb-3 font-display text-[1.15rem] font-medium text-charcoal">{value.title}</h3>
              <p className="text-[0.85rem] leading-[1.8] text-mid">{value.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

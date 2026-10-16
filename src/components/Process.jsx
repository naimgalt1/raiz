import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import { steps } from '../data/content.js';
import Icon from './Icon.jsx';

export default function Process() {
  return (
    <section id="proceso" className="bg-beige px-6 py-24 lg:px-18">
      <Reveal className="mx-auto mb-18 max-w-xl text-center">
        <SectionHeader
          className="text-center"
          label="Cómo lo hacemos"
          title={
            <>
              Del campo a <em className="text-moss italic">tu baño.</em>
            </>
          }
          lineClassName="mx-auto"
        />
        <p className="text-[0.97rem] leading-[1.85] text-mid">
          Cada producto Raíz sigue un proceso artesanal sin atajos. Así garantizamos que lo que llega a tu piel es
          exactamente lo que prometemos.
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-px bg-beige-dark sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 100} className="h-full">
            <article className="relative h-full bg-beige p-9 transition-colors duration-300 hover:bg-cream">
              <span className="mb-4 block text-moss"><Icon name={step.icon} size={28} /></span>
              <p className="mb-4 font-display text-5xl leading-none text-earth/15">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mb-2.5 font-display text-lg font-medium text-charcoal">{step.title}</h3>
              <p className="text-[0.83rem] leading-[1.8] text-mid">{step.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

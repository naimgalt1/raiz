import Reveal from './Reveal.jsx';

const HERO_IMAGE = '/images/9c829bbe7_generated_image.png';

const trust = [
  { value: '100%', label: 'Orgánico' },
  { value: '+2k', label: 'Clientas felices' },
  { value: '0', label: 'Tóxicos' },
];

export default function Hero() {
  return (
    <section id="hero" className="grid min-h-[calc(100vh-108px)] bg-beige lg:grid-cols-2">
      <div className="flex flex-col justify-center px-7 py-16 lg:px-18 lg:py-20">
        <Reveal>
          <span className="mb-7 inline-flex w-fit items-center gap-2 rounded-full bg-moss-pale px-4 py-1.5 text-[0.65rem] font-medium tracking-[0.18em] text-moss uppercase">
            <span className="text-[0.5rem]">✦</span> 100% natural &amp; artesanal
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mb-6 font-display text-[clamp(3.2rem,5.5vw,6rem)] leading-[1.05] font-medium tracking-[-0.01em] text-charcoal">
            De la tierra
            <br />
            <em className="text-moss italic">a tu piel.</em>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mb-11 max-w-md text-base leading-[1.85] text-mid">
            Cosméticos elaborados a mano con ingredientes orgánicos certificados. Sin químicos, sin artificios. Solo lo
            que la naturaleza lleva siglos perfeccionando.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mb-15 flex flex-wrap items-center gap-3.5">
            <a
              href="#catalogo"
              className="inline-flex items-center gap-2.5 rounded-sm bg-moss px-8 py-4 text-[0.72rem] font-medium tracking-[0.12em] text-beige uppercase transition-all hover:-translate-y-0.5 hover:bg-moss-light"
            >
              Explorar tienda →
            </a>
            <a
              href="#valores"
              className="rounded-sm border border-beige-dark px-8 py-3.5 text-[0.72rem] font-medium tracking-[0.12em] text-charcoal uppercase transition-colors hover:border-moss hover:text-moss"
            >
              Nuestra historia
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="flex gap-8 border-t border-beige-dark pt-8">
            {trust.map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="font-display text-[1.8rem] leading-none text-charcoal">{item.value}</span>
                <span className="mt-1 text-[0.65rem] tracking-[0.1em] text-light uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal className="relative h-[60vw] overflow-hidden lg:h-auto">
        <img
          src={HERO_IMAGE}
          alt="Cosmética natural Raíz"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
        />
        <div className="badge-spin absolute right-10 bottom-10 flex h-28 w-28 items-center justify-center rounded-full bg-beige p-4 text-center shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
          <span className="font-display text-[0.65rem] leading-snug text-moss italic">
            Hecho
            <br />a mano
          </span>
        </div>
      </Reveal>
    </section>
  );
}

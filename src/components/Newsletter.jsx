import { useState } from 'react';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import { COUPON_CODE, skinTypes } from '../data/content.js';

const NEWSLETTER_IMAGE = '/images/adcbac0be_generated_image.png';

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText(COUPON_CODE).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="newsletter" className="grid items-center gap-12 bg-moss px-6 py-24 lg:grid-cols-2 lg:gap-25 lg:px-18">
      <Reveal className="hidden lg:block">
        <img src={NEWSLETTER_IMAGE} alt="Raíz naturaleza" className="aspect-4/3 w-full rounded-none object-cover" />
      </Reveal>

      <Reveal delay={100} className="text-beige">
        <SectionHeader
          label="Únete a la comunidad"
          title={
            <>
              Tu piel merece <em className="text-beige-dark italic">lo mejor.</em>
            </>
          }
          className="[&_span]:text-beige/60 [&_h2]:text-beige [&>div]:bg-beige-dark"
        />

        <p className="mb-9 text-[0.97rem] leading-[1.85] text-beige/75">
          Suscríbete y recibe tu código de descuento al instante. Además, te mantendremos al día de nuevos lanzamientos,
          rituales de cuidado y secretos de cosmética natural.
        </p>

        {submitted ? (
          <div className="rounded-none border border-beige/30 bg-white/10 p-9 text-center">
            <h3 className="mb-2.5 font-display text-2xl text-beige italic">¡Bienvenida a Raíz! 🌱</h3>
            <p className="text-sm text-beige/70">Tu código de descuento es:</p>
            <button
              type="button"
              onClick={handleCopy}
              title="Haz clic para copiar"
              className="my-4 mb-2.5 inline-block cursor-pointer rounded-none bg-beige px-6 py-2.5 text-xl font-bold tracking-[0.2em] text-moss"
            >
              {copied ? '¡Copiado!' : COUPON_CODE}
            </button>
            <p className="text-[0.72rem] text-beige/50">Haz clic en el código para copiarlo</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <div className="grid gap-3.5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Tu nombre"
                required
                className="w-full rounded-none border border-beige/25 bg-white/10 px-4.5 py-3.5 text-sm text-beige placeholder:text-beige/40 focus:border-beige focus:outline-none"
              />
              <input
                type="email"
                placeholder="tu@email.com"
                required
                className="w-full rounded-none border border-beige/25 bg-white/10 px-4.5 py-3.5 text-sm text-beige placeholder:text-beige/40 focus:border-beige focus:outline-none"
              />
            </div>
            <select
              defaultValue=""
              required
              className="w-full appearance-none rounded-none border border-beige/25 bg-white/10 px-4.5 py-3.5 text-sm text-beige focus:border-beige focus:outline-none"
            >
              <option value="" disabled>
                ¿Qué tipo de piel tienes?
              </option>
              {skinTypes.map((type) => (
                <option key={type} value={type} className="text-charcoal">
                  {type}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="cursor-pointer rounded-none bg-beige py-3.5 text-[0.72rem] font-medium tracking-[0.14em] text-moss uppercase transition-colors hover:bg-cream"
            >
              Quiero mi 10% de descuento →
            </button>
            <p className="text-[0.68rem] leading-relaxed text-beige/45">
              Al suscribirte aceptas recibir comunicaciones comerciales de Raíz. Puedes darte de baja en cualquier
              momento. Sin spam, prometido.
            </p>
          </form>
        )}
      </Reveal>
    </section>
  );
}

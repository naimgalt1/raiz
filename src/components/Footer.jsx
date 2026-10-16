const shopLinks = [
  { href: '#catalogo', label: 'Todos los productos' },
  { href: '#catalogo', label: 'Cuidado facial' },
  { href: '#catalogo', label: 'Cuidado corporal' },
  { href: '#catalogo', label: 'Labios' },
];

const brandLinks = [
  { href: '#valores', label: 'Nuestra historia' },
  { href: '#proceso', label: 'El proceso' },
  { href: '#newsletter', label: 'Newsletter' },
];

const certifications = ['Ecocert', 'Cruelty Free', 'Vegan'];

function FooterList({ title, links }) {
  return (
    <div>
      <h4 className="mb-5 text-[0.6rem] font-medium tracking-[0.2em] text-earth-light uppercase">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-[0.85rem] text-light/60 transition-colors hover:text-beige">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-charcoal px-6 pt-20 pb-9 lg:px-18">
      <div className="mb-15 grid gap-12 md:grid-cols-2 lg:grid-cols-[2.5fr_1fr_1fr_1fr]">
        <div>
          <p className="mb-1.5 font-display text-[2rem] font-medium tracking-[0.04em] text-beige">Raíz</p>
          <p className="mb-4.5 text-[0.7rem] tracking-[0.12em] text-light uppercase">De la tierra a tu piel.</p>
          <p className="max-w-xs text-[0.85rem] leading-[1.85] text-light/60">
            Cosmética natural y artesanal elaborada con ingredientes orgánicos certificados. Sin tóxicos, sin
            compromiso con tu piel ni con el planeta.
          </p>
        </div>

        <FooterList title="Tienda" links={shopLinks} />
        <FooterList title="Raíz" links={brandLinks} />

        <div>
          <h4 className="mb-5 text-[0.6rem] font-medium tracking-[0.2em] text-earth-light uppercase">Ayuda</h4>
          <p className="text-[0.85rem] leading-[1.9] text-light/60">
            hola@raizcosmetics.es
            <br />
            <br />
            Envíos en 2-4 días
            <br />
            Devoluciones 30 días
            <br />
            <br />
            Tarragona, España
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/7 pt-7">
        <p className="text-[0.6rem] tracking-[0.1em] text-light/30">
          © 2026 Raíz Cosmética Natural · Todos los derechos reservados
        </p>
        <div className="flex gap-3">
          {certifications.map((cert) => (
            <span key={cert} className="rounded-full border border-white/10 px-3 py-1 text-[0.6rem] tracking-[0.08em] text-light/40 uppercase">
              {cert}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

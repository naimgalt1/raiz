const links = [
  { href: '#valores', label: 'Nosotros' },
  { href: '#catalogo', label: 'Tienda' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#newsletter', label: 'Newsletter' },
];

export default function Navbar({ cartCount }) {
  return (
    <nav className="sticky top-0 z-[100] flex flex-wrap items-center justify-between gap-y-3 border-b border-beige-dark bg-cream/95 px-5 py-3 backdrop-blur-md lg:h-18 lg:flex-nowrap lg:px-18 lg:py-0">
      <a href="#hero" className="flex items-center gap-2.5">
        <img src="/images/2367710e9_generated_image.png" alt="" className="h-9 w-9 object-contain" />
        <span className="font-display text-[1.55rem] font-medium tracking-[0.04em] text-charcoal">Raíz</span>
      </a>

      <ul className="order-last flex w-full justify-between gap-4 overflow-x-auto text-[0.66rem] [scrollbar-width:none] lg:order-none lg:w-auto lg:gap-9 lg:text-[0.75rem]">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[0.75rem] font-normal tracking-[0.12em] text-mid uppercase transition-colors hover:text-moss"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5">
        <button
          type="button"
          aria-label={`Cesta: ${cartCount} artículos`}
          className="relative flex cursor-pointer items-center justify-center text-[1.1rem] text-charcoal transition-colors hover:text-moss"
        >
          🛒
          <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-none bg-moss text-[0.55rem] font-bold text-white">
            {cartCount}
          </span>
        </button>
        <a
          href="#newsletter"
          className="bg-moss px-6 py-2.5 text-[0.68rem] font-medium tracking-[0.12em] text-beige uppercase transition-colors hover:bg-moss-light"
        >
          10% dto.
        </a>
      </div>
    </nav>
  );
}

/** Etiqueta pequeña + título de sección + línea decorativa, reutilizado en todo el sitio. */
export default function SectionHeader({ label, title, className = '', lineClassName = '' }) {
  return (
    <div className={className}>
      <span className="mb-3.5 block text-[0.62rem] font-medium tracking-[0.25em] text-terra uppercase">
        {label}
      </span>
      <h2 className="font-display text-[clamp(2rem,3.8vw,3.2rem)] leading-[1.15] font-medium text-charcoal">
        {title}
      </h2>
      <div className={`mt-5 mb-6 h-0.5 w-9 bg-terra ${lineClassName}`} />
    </div>
  );
}

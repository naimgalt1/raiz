const paths = {
  leaf: 'M5 19c0-8 6-14 14-14 0 8-6 14-14 14z M5 19l7-7',
  sprout: 'M12 22v-10 M12 12c0-4-3-7-7-7 0 4 3 7 7 7z M12 12c0-3 2-6 6-6 0 3-2 6-6 6z',
  box: 'M3 7l9-4 9 4v10l-9 4-9-4z M3 7l9 4 9-4 M12 11v10',
  heart: 'M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z',
  flask: 'M9 3h6 M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3',
  jar: 'M5 8h14v12H5z M4 8h16V5H4z',
  send: 'M22 2L11 13 M22 2l-7 20-4-9-9-4 20-7z',
};

/** Icono de trazo propio (sustituye a los emojis). Hereda el color del texto. */
export default function Icon({ name, size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={paths[name]} />
    </svg>
  );
}

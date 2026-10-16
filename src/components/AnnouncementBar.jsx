export default function AnnouncementBar({ onSubscribe }) {
  return (
    <div className="bg-moss px-5 py-2.5 text-center text-[0.72rem] font-normal tracking-[0.15em] text-beige">
      ✦ Envío gratuito en pedidos superiores a 35 €
      <span className="mx-3">·</span>
      <button type="button" onClick={onSubscribe} className="cursor-pointer text-beige-dark underline">
        Suscríbete y obtén un 10% de descuento en tu primer pedido →
      </button>
    </div>
  );
}

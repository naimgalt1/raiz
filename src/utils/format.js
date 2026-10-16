export const formatPrice = (value) => `${value} €`;

/** Devuelve cinco estrellas con las rellenas según la valoración (1–5). */
export const renderStars = (rating) => '★'.repeat(rating) + '☆'.repeat(5 - rating);

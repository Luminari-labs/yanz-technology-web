const DEFAULT_PRICE_FALLBACK = '0';

function sanitizePriceInput(value: unknown): string {
  if (value === null || value === undefined) {
    return '';
  }

  if (typeof value === 'number') {
    return String(value);
  }

  return String(value)
    .trim()
    .replace(/[^\d,.-]/g, '')
    .replace(',', '.');
}

export function parsePriceValue(value: unknown): number {
  const normalized = sanitizePriceInput(value);
  const numericValue = Number(normalized);
  return Number.isFinite(numericValue) ? numericValue : 0;
}

export function formatPriceValue(value: unknown): string {
  const numericValue = parsePriceValue(value);

  if (!Number.isFinite(numericValue)) {
    return DEFAULT_PRICE_FALLBACK;
  }

  return new Intl.NumberFormat('es-EC', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(numericValue);
}

import format from 'format-number';

export default function (value: any, prefix = '£') {
  const parsed = (parseFloat(value) || 0) / 100;
  return format({ prefix, padRight: 2 })(parsed.toFixed(2) as any);
}

export function formatPrice(value: number): number {
  return parseFloat(format({ padRight: 2 })(parseFloat(value.toFixed(2)), { noSeparator: true }));
}

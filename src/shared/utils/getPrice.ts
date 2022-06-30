function prettify(num: number): string {
  const n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');
}

export function getPrice(price: [number, number] | number): string {
  if (typeof price === 'number') {
    return prettify(price) + ' ₽';
  }

  return `${prettify(price[0])} - ${prettify(price[1])} ₽`;
}

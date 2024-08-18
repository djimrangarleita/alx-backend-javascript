export default function cleanSet(set, startString) {
  const result = [];
  if (typeof startString !== 'string') {
    return '';
  }
  set.forEach((item) => {
    if (startString && item && item.startsWith(startString)) {
      result.push(item.substring(startString.length));
    }
  });

  return result.join('-');
}

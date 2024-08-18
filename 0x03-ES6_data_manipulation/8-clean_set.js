export default function cleanSet(set, startString) {
  const result = [];
  set.forEach((item) => {
    if (startString && item.startsWith(startString)) {
      result.push(item.substring(startString.length));
    }
  });

  return result.join('-');
}

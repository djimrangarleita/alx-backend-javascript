export default function hasValuesFromArray(setElements, arrayElements) {
  return arrayElements.every((elt) => setElements.has(elt));
}

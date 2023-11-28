export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    // eslint-disable-next-line no-param-reassign
    array[idx] = appendString + array[idx];
  }
  return array;
}

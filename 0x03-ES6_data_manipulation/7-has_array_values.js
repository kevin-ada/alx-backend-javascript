export default function hasValuesFromArray(set, array) {
  let hasAllValues = true;
  array.forEach((item) => {
    if (!set.has(item)) {
      hasAllValues = false;
    }
  });
  return hasAllValues;
}

export default function cleanSet(set, startString) {
  const newSet = new Set();
  set.forEach((item) => {
    if (item.startsWith(startString)) {
      newSet.add(item.slice(startString.length));
    }
  });
  return newSet;
}

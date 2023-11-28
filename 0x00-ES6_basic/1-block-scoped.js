export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;
  if (trueOrFalse) {
    // eslint-disable-next-line no-unused-vars
    task = true;
    task2 = false;
  }
  return [task, task2];
}

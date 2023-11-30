export default function getResponseFromAPI() {
  // eslint-disable-next-line consistent-return
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      return resolve;
    }
    reject();
  });
}

export default function uploadPhoto(filename) {
  // eslint-disable-next-line new-cap
  return new Promise.reject(
    new Error(`${filename} cannot be processed`),
  );
}

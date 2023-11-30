export default function getFullResponseFromAPI(success) {
  return Promise((resolve, reject) => {
    if (success === true) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject('The fake API is not working currently');
    }
  });
}

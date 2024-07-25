export default function handleResponseFromAPI(promise) {
  return promise.then(() => ({
    status: 200,
    body: 'Success',
  })).then((data) => {
    console.log('Got a response from the API');
    return data;
  }).catch(() => (new Error()));
}

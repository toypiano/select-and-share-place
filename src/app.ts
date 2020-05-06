const form = document.querySelector('form')! as HTMLFormElement;
const addressInput = document.querySelector('#address')! as HTMLInputElement;

function searchAddressHandler(e: Event) {
  e.preventDefault();
  const enteredAddress = addressInput.value;

  const API_KEY = 'AIzaSyCigPEMEx6R4PJNn_dWAUKE_aJP_xxqhVU'; // cspell: disable-line
  // send this to Google's API!
}

form.addEventListener('submit', searchAddressHandler);

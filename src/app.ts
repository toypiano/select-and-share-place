import axios from 'axios';

const form = document.querySelector('form')! as HTMLFormElement;
const addressInput = document.querySelector('#address')! as HTMLInputElement;

async function searchAddressHandler(e: Event) {
  e.preventDefault();
  const enteredAddress = addressInput.value;

  const API_KEY = 'AIzaSyCigPEMEx6R4PJNn_dWAUKE_aJP_xxqhVU'; // cspell: disable-line
  // send this to Google's API!

  // Only declare fields that we need
  type GoogleGeocodingResponse = {
    results: {
      geometry: {
        location: {
          lat: number;
          lng: number;
        };
      };
    }[];
    status: 'OK' | 'ZERO_RESULTS'; // only these two will do!
  };
  try {
    const res = await axios.get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )},+CA&key=${API_KEY}`
    );
    if (res.data.status !== 'OK') {
      throw new Error('Could not fetch location!');
    }
    const coords = res.data.results[0].geometry.location;
  } catch (err) {
    alert(err.message);
    console.log(err);
  }
}

form.addEventListener('submit', searchAddressHandler);

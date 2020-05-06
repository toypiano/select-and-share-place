# Select & Share a Place

An app written with TypeScript

## Google Maps Geocoding API

Converts geo-coordinates into address and vice versa.

- [Geocoding API](https://developers.google.com/maps/documentation/geocoding/start)

## For API responses, declare types with only fields that we need

When you get a response from an API, you typically want to access certain properties inside the data object and pass that to some other function that expects a certain type. For this, you might want to declare a type for the response data.

When you define the type, you only need to define the fields that you're going to use, and you can reference the API documentation for expected values and type.

- [Geocoding Response](https://developers.google.com/maps/documentation/geocoding/intro#GeocodingResponses)
- [Status Codes](https://developers.google.com/maps/documentation/geocoding/intro#StatusCodes)

```ts
```

## Google Maps JS API

You can use [Maps JS API](https://developers.google.com/maps/documentation/javascript/tutorial) to customize maps with your own content and and display image on web page and mobile devices.

- Add Maps SDK to the application

```html
<script
  src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"
  async
  defer
></script>
```

```
`&callback=initMap` at the end of src string will trigger a function
once the map is loaded and therefore, is omitted.
```

- [Adding a map with a marker](https://developers.google.com/maps/documentation/javascript/adding-a-google-map#try-it-yourself)

## type checking for libraries from CDN

We could technically do this, but wouldn't be great.

```ts
declare var google: any;

// now we can use methods / properties on google
const map = new google.maps.Map(document.getElementById('map'), {
  center: coords,
  zoom: 14,
});
```

### Solution

Search for "types google maps"

- [@types/googlemaps](https://www.npmjs.com/package/@types/googlemaps)

Google's JS APIs are not provided through npm, but we can still install type declarations with npm.

```bash
yarn add --dev @types/googlemaps
```

## OpenLayers

"A high-performance, feature-packed library for all your mapping needs."

- [Quick Start](https://openlayers.org/en/latest/doc/quickstart.html)

`index.html`

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.1.1/css/ol.css"
  type="text/css"
/>
<script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.1.1/build/ol.js"></script>
```

`app.ts`

```ts
declare var ol: any;

function searchAddressHandler(event: Event) {
  event.preventDefault();

  const coordinates = { lat: 40.41, lng: -73.99 }; // Can't fetch coordinates from Google API, use dummy ones

  document.getElementById('map')!.innerHTML = ''; // clear <p> from <div id="map">
  new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
      zoom: 16,
    }),
  });
}
```

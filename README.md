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

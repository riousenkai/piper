import Geocode from "react-geocode";

export const getLatLong = (loc) => {
  return Geocode.fromAddress(loc).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      return { lat: +lat, long: +lng}
    },
    (error) => {
      console.error(error);
    }
  );
};

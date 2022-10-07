export type GeocodingResponse = {
  results: {
    geometry: {
      location: {
        lat: number
        lng: number
      },
    },
    place_id: string,
  }[]
}

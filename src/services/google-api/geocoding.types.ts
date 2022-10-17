export type GeocodingResponse = {
  results: {
    address_components: {
      long_name: string
      short_name: string
      types: string[]
    }[]
    formatted_address: string,
    geometry: {
      location: {
        lat: number
        lng: number
      },
      location_type: string,
      viewport: {
        northeast: {
          lat: number,
          lng: number,
        },
        southwest: {
          lat: number,
          lng: number,
        },
      },
    },
    plus_code: {
      compound_code: string,
      global_code: string,
    },
    place_id: string,
    types: string[],
  }[],
  status: 'OK' | 'ZERO_RESULTS' | 'OVER_QUERY_LIMIT' | 'REQUEST_DENIED' | 'INVALID_REQUEST' | 'UNKNOWN_ERROR' | 'ERROR',
}

import axios from 'axios'
import { GeocodingResponse } from './geocoding.types'

export const geocodingService = async (address: string): Promise<GeocodingResponse | undefined> => {
  const BASE_URL = import.meta.env.VITE_GEOCODING_API_BASE_URL
  const KEY = import.meta.env.VITE_GEOCODING_GOOGLE_API_KEY

  try {
    const response = await axios.get(
      `${BASE_URL}/json?address=${address}&key=${KEY}`,
    )
    return response.data
  } catch (error) {
    console.error('error', error)
  }
}

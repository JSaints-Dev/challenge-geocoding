import { HaversineDistanceProps } from './haversine.types'

export const haversineDistance = ({ from, to }: HaversineDistanceProps) => {
  const { latitude: lat1, longitude: lon1 } = from
  const { latitude: lat2, longitude: lon2 } = to
  const RADIUS_OF_EARTH_IN_KM = 6371
  const toRadian = (angle: number) => (Math.PI / 180) * angle
  const distance = (a:number, b:number) => (Math.PI / 180) * (a - b)

  const distanceLat = distance(lat2, lat1)
  const distanceLon = distance(lon2, lon1)

  const lat1InRad = toRadian(lat1)
  const lat2InRad = toRadian(lat2)

  // Haversine Formula
  const a =
    Math.pow(Math.sin(distanceLat / 2), 2) +
    Math.pow(Math.sin(distanceLon / 2), 2) * Math.cos(lat1InRad) * Math.cos(lat2InRad)

  const c = 2 * Math.asin(Math.sqrt(a))

  return (RADIUS_OF_EARTH_IN_KM * c).toFixed(0)
}

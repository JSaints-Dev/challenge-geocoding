import { useState } from 'react'
import { geocodingService } from '@services/google-api/geocoding.service'
import { DistancesReduceAccType, GeoLocationContainerProps, IdsNearestAndFarthestType } from './geolocation.types'
import { haversineDistance } from '@resources/utils'

export const GeolocationContainer = (props: ContainerWithProps<GeoLocationContainerProps>) => {
  const [addresses, setAddresses] = useState<AddressType[]>([])
  const [idsNearestAndFurthest, setIdsNearestAndFurthest] = useState<IdsNearestAndFarthestType | null>(null)
  const [calculatedDistances, setCalculatedDistances] = useState(false)

  const getFormValueAndSaveAddress = async (value: string) => {
    const result = await geocodingService(value)

    if (result?.status === 'OK') {
      setAddresses((prev) => [
        ...prev,
        {
          address: result.results[0].formatted_address,
          id: addresses.length + 1,
          latitude: result.results[0].geometry.location.lat,
          longitude: result.results[0].geometry.location.lng,
        },
      ])
    }
  }

  const setDistanceInAddressDescription = (distances: DistancesReduceAccType[]) => {
    const newAddresses = addresses.map<AddressType>((address) => {
      const description = distances.filter((distance) => distance.from === address.id || distance.to === address.id).map(distance => {
        return `distante ${distance.distance} km do endereço ${distance.to === address.id ? distance.from : distance.to}`
      })

      return {
        ...address,
        description: description.join(', '),
      }
    })

    setAddresses(newAddresses)
    setCalculatedDistances(true)
  }

  const getDistances = () => {
    const distances = addresses.reduce<DistancesReduceAccType[]>((acc, itemI, indexI, arr) => {
      if (indexI < arr.length - 1) {
        arr.slice(indexI).forEach((itemJ, indexJ) => {
          if (indexJ > 0) {
            const distance = haversineDistance({
              from: {
                latitude: itemI.latitude ?? 0,
                longitude: itemI.longitude ?? 0,
              },
              to: {
                latitude: itemJ.latitude ?? 0,
                longitude: itemJ.longitude ?? 0,
              },
            })

            acc.push({
              from: itemI.id,
              to: itemJ.id,
              distance: +distance,
            })
          }
        })
      }

      return acc
    }, []).map(item => item).sort((a, b) => a.distance - b.distance)

    setIdsNearestAndFurthest({
      nearest: [distances[0].from, distances[0].to],
      furthest: [distances[distances.length - 1].from, distances[distances.length - 1].to],
    })

    setDistanceInAddressDescription(distances)
  }

  const clearAddresses = () => {
    setAddresses([])
    setIdsNearestAndFurthest(null)
    setCalculatedDistances(false)
  }

  return props.children({
    addresses,
    calculatedDistances,
    clearAddresses,
    getFormValueAndSaveAddress,
    getDistances,
    idsNearestAndFurthest,
  })
}

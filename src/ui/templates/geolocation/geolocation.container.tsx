import { useState } from 'react'
import { geocodingService } from '@services/google-api/geocoding.service'
import { GeoLocationContainerProps } from './geolocation.types'

export const GeolocationContainer = (props: ContainerWithProps<GeoLocationContainerProps>) => {
  const [addresses, setAddresses] = useState<AddressType[]>([])

  const getFormValueAndSaveAddress = async (value: string) => {
    const result = await geocodingService(value)

    if (result?.status === 'OK') {
      setAddresses((prev) => [
        ...prev,
        {
          address: result.results[0].formatted_address,
          id: addresses.length + 1,
        },
      ])
    }
  }

  return props.children({ getFormValueAndSaveAddress })
}

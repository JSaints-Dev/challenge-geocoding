import { Box, Divider } from '@ui/atoms'
import { DistanceAddresses, FetchAddresses } from '@ui/organisms'
import * as S from './geolocation.styles'
import * as Containers from './geolocation.container'

export const GeolocationTemplate = () => {
  return (
    <Box w='100%' minH='100vh'>
      <Containers.GeolocationContainer>
        {({ getFormValueAndSaveAddress, getDistances, addresses, idsNearestAndFurthest, showDistances }) => (
          <S.FetchAddressContainer>
            <FetchAddresses
              addresses={addresses}
              getDistances={getDistances}
              getValues={getFormValueAndSaveAddress}
            />

            {showDistances && (
              <>
                <Divider bg='white' />
                <DistanceAddresses distanceList={{
                  all: addresses,
                  furthest: idsNearestAndFurthest?.furthest,
                  nearest: idsNearestAndFurthest?.nearest,
                }}
                />
              </>
            )}
          </S.FetchAddressContainer>
        )}
      </Containers.GeolocationContainer>
    </Box>
  )
}

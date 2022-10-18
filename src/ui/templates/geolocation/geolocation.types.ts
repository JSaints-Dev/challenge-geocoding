export type IdsNearestAndFarthestType = {
  nearest: number[]
  furthest: number[]
}

export type GeoLocationContainerProps = {
  getFormValueAndSaveAddress: (v: string) => void
  getDistances: () => void
  clearAddresses: () => void
  addresses: AddressType[]
  calculatedDistances: boolean
  idsNearestAndFurthest: IdsNearestAndFarthestType | null
}

export type DistancesReduceAccType = {
  from: number
  to: number
  distance: number
}

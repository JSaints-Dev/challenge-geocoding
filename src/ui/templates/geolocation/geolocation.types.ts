export type IdsNearestAndFarthestType = {
  nearest: number[]
  furthest: number[]
}

export type GeoLocationContainerProps = {
  getFormValueAndSaveAddress: (v: string) => void
  getDistances: () => void
  addresses: AddressType[]
  showDistances: boolean
  idsNearestAndFurthest: IdsNearestAndFarthestType | null
}

export type DistancesReduceAccType = {
  from: number
  to: number
  distance: number
}

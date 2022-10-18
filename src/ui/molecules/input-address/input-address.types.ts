export type InputAddressProps = {
  getValues?: (v: string) => void
  getDistances: () => void
  calculatedDistances: boolean
  clearAddresses: () => void
}

type FormElements ={
  address: HTMLInputElement
} & HTMLFormControlsCollection

export type InputFormElement = {
  readonly elements: FormElements
} & HTMLFormElement

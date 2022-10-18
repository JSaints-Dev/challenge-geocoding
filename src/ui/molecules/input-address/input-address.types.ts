export type InputAddressProps = {
  getValues?: (v: string) => void
  getDistances: () => void
}

type FormElements ={
  address: HTMLInputElement
} & HTMLFormControlsCollection

export type InputFormElement = {
  readonly elements: FormElements
} & HTMLFormElement

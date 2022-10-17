export type InputAddressProps = {
  getValues?: (v: string) => void
}

type FormElements ={
  address: HTMLInputElement
} & HTMLFormControlsCollection

export type InputFormElement = {
  readonly elements: FormElements
} & HTMLFormElement
